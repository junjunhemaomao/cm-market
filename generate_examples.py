"""Generate example pack images (covers + previews) using Pillow.

Usage:   python generate_examples.py
Output:  public/images/covers/*.png   (600x400)
         public/images/previews/*.png (800x600)

Replace these with real screenshots before deployment.
"""
from PIL import Image, ImageDraw, ImageFont
import os, math, random

OUT = "public/images"
COVERS = os.path.join(OUT, "covers")
PREVIEWS = os.path.join(OUT, "previews")

os.makedirs(COVERS, exist_ok=True)
os.makedirs(PREVIEWS, exist_ok=True)

W, H = 600, 400
PW, PH = 800, 600

# ---- color palettes ----
PALETTES = {
    "framing":    ("#1a1a2e", "#2c7cf0", "#e8f0fe"),
    "character":  ("#2d132c", "#c42a6b", "#fce4ec"),
    "scene":      ("#1b2e1b", "#2d8a56", "#e8f5e9"),
    "effect":     ("#2e1a0f", "#e8882a", "#fff3e0"),
}

def get_font(size=24):
    """Try common Chinese fonts, fall back to default."""
    paths = [
        "C:/Windows/Fonts/msyh.ttc",       # Microsoft YaHei
        "C:/Windows/Fonts/simhei.ttf",     # SimHei
        "C:/Windows/Fonts/simsun.ttc",     # SimSun
        "C:/Windows/Fonts/arial.ttf",
    ]
    for p in paths:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()


def draw_grid(draw, x0, y0, cols, rows, cw, ch, color, width=1):
    """Draw a panel grid (manga frame layout)."""
    for r in range(rows + 1):
        y = y0 + r * ch
        draw.line([(x0, y), (x0 + cols * cw, y)], fill=color, width=width)
    for c in range(cols + 1):
        x = x0 + c * cw
        draw.line([(x, y0), (x, y0 + rows * ch)], fill=color, width=width)


def draw_speed_lines(draw, cx, cy, w, h, color, count=20):
    """Radial speed lines from a focus point."""
    for i in range(count):
        angle = (i / count) * 2 * math.pi + random.uniform(-0.1, 0.1)
        length = random.uniform(w * 0.3, w * 0.6)
        ex = cx + length * math.cos(angle)
        ey = cy + length * math.sin(angle)
        draw.line([(cx, cy), (ex, ey)], fill=color, width=random.randint(1, 3))


def draw_composition_lines(draw, w, h, color):
    """Rule of thirds + golden ratio guides."""
    for x in [w/3, 2*w/3]:
        draw.line([(x, 0), (x, h)], fill=color, width=1)
    for y in [h/3, 2*h/3]:
        draw.line([(0, y), (w, y)], fill=color, width=1)
    # golden ratio
    phi = 1.618
    gx = w / phi
    gy = h / phi
    draw.ellipse([gx-40, gy-40, gx+40, gy+40], outline=color, width=2)


def draw_circle_set(draw, cx, cy, color, count=5, r=30):
    """Concentric circles (for effects)."""
    for i in range(count):
        rr = r + i * 15
        draw.ellipse([cx-rr, cy-rr, cx+rr, cy+rr], outline=color, width=1)


# ============================================================
# COVERS
# ============================================================

def make_cover(slug, text, palette_key, extra_draw=None):
    bg, accent, _ = PALETTES[palette_key]
    img = Image.new("RGBA", (W, H), bg)
    draw = ImageDraw.Draw(img)

    # gradient overlay
    for i in range(H):
        alpha = int(20 + 40 * (1 - i / H))
        draw.line([(0, i), (W, i)], fill=(255, 255, 255, alpha))

    # accent bar at bottom
    draw.rectangle([(0, H-6), (W, H)], fill=accent)

    # center icon area with decorative grid
    draw_grid(draw, 120, 50, 4, 3, 90, 80, accent, 2)

    if extra_draw:
        extra_draw(draw)

    # text label
    font = get_font(26)
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    draw.text(((W - tw) / 2, H - 60), text, fill="#ffffff", font=font)

    img.save(os.path.join(COVERS, f"{slug}.png"))


# ============================================================
# PREVIEWS
# ============================================================

def make_preview(slug, idx, bg_color, accent_color, draw_fn):
    img = Image.new("RGBA", (PW, PH), bg_color)
    draw = ImageDraw.Draw(img)

    # subtle border
    draw.rectangle([(4, 4), (PW-4, PH-4)], outline=accent_color, width=2)

    draw_fn(draw)

    img.save(os.path.join(PREVIEWS, f"{slug}_{idx}.png"))


# ---- Generate all pack images ----

font = get_font(28)

# 1. 分镜基础入门（免费）
slug = "framing-basics"
make_cover(slug, "分镜基础入门", "framing")
for i in range(4):
    def fn(d, i=i):
        draw_grid(d, 80, 60, 3, 2, 200, 200, "#2c7cf0", 2)
        draw_composition_lines(d, PW, PH, "#5b86b5")
        d.text((60, 530), f"构图参考 #{i+1} — 引导线与分格", fill="#94a3b8", font=get_font(18))
    make_preview(slug, i+1, "#f0f4fa", "#2c7cf0", fn)

# 2. 完整场景分镜结构（轻量版）
slug = "scene-framing"
make_cover(slug, "场景分镜结构", "framing")
for i in range(5):
    rows = [2, 3, 4, 2, 3][i]
    cols = [3, 2, 3, 4, 2][i]
    def fn(d, rows=rows, cols=cols, i=i):
        draw_grid(d, 60, 50, cols, rows, 160, 140, "#e8882a", 2)
        d.text((60, 530), f"场景分镜 {i+1} — {rows}x{cols} 格布局", fill="#94a3b8", font=get_font(18))
    make_preview(slug, i+1, "#fdf6f0", "#e8882a", fn)

# 3. 全维度分镜大数据（专业版）
slug = "pro-framing"
make_cover(slug, "专业分镜数据", "framing")
for i in range(6):
    def fn(d, i=i):
        # data visualization mock
        for j in range(8):
            bar_h = random.randint(40, 300)
            x = 80 + j * 85
            d.rectangle([(x, 450-bar_h), (x+40, 450)], fill="#8b1e1e")
        d.text((200, 80), "齐夫分布 · 分格频率模型", fill="#d4a574", font=get_font(30))
        d.text((60, 530), f"数据面板 #{i+1} — 行业级统计分析", fill="#94a3b8", font=get_font(18))
    make_preview(slug, i+1, "#1a1a2e", "#8b1e1e", fn)

# 4. 角色表情视觉词汇包
slug = "expressions"
make_cover(slug, "角色表情包", "character")
for i in range(4):
    emotions = ["喜悦", "愤怒", "悲伤", "惊讶"]
    def fn(d, i=i):
        # simple face circles
        for j in range(6):
            x = 80 + (j % 3) * 220
            y = 60 + (j // 3) * 220
            d.ellipse([x, y, x+120, y+120], outline="#c42a6b", width=2)
            # eyes
            ex, ey = x+35, y+50
            d.ellipse([ex, ey, ex+12, ey+12], fill="#c42a6b")
            d.ellipse([ex+50, ey, ex+62, ey+12], fill="#c42a6b")
            # mouth
            mx, my = x+45, y+75
            d.arc([mx, my, mx+30, my+20], 0, 180, fill="#c42a6b", width=2)
        d.text((60, 530), f"表情参考 #{i+1} — {emotions[i]}类情绪", fill="#94a3b8", font=get_font(18))
    make_preview(slug, i+1, "#fdf5f8", "#c42a6b", fn)

# 5. 场景背景视觉词汇合集
slug = "scenes"
make_cover(slug, "场景背景合集", "scene")
for i in range(5):
    def fn(d, i=i):
        # landscape silhouettes
        for j in range(4):
            x = 60 + j * 170
            # horizon
            hy = 250 + random.randint(-40, 40)
            d.line([(x, hy), (x+150, hy)], fill="#2d8a56", width=2)
            # mountains/buildings
            for k in range(3):
                bx = x + 30 + k * 40
                bh = random.randint(30, 100)
                d.polygon([(bx, hy), (bx+30, hy-bh), (bx+60, hy)], outline="#2d8a56", width=1)
        d.text((60, 530), f"场景参考 #{i+1}", fill="#94a3b8", font=get_font(18))
    make_preview(slug, i+1, "#f2f8f4", "#2d8a56", fn)

# 6. 特效与速度线素材包
slug = "sfx-effects"
make_cover(slug, "特效速度线", "effect")
for i in range(4):
    def fn(d, i=i):
        cx, cy = PW//2, PH//2 - 30
        draw_speed_lines(d, cx, cy, PW, PH, "#e8882a", 30)
        draw_circle_set(d, cx-150, cy+80, "#c44a10", 4, 25)
        draw_circle_set(d, cx+150, cy+80, "#c44a10", 4, 25)
        d.text((60, 530), f"特效 {i+1} — 速度线/集中线/效果", fill="#94a3b8", font=get_font(18))
    make_preview(slug, i+1, "#fdf8f2", "#e8882a", fn)

# 7. 角色设计参考套件
slug = "character-kit"
make_cover(slug, "角色设计套件", "character")
for i in range(4):
    def fn(d, i=i):
        # figure proportions
        for j in range(3):
            bx = 120 + j * 200
            # head
            d.ellipse([bx+30, 60, bx+70, 100], outline="#c42a6b", width=2)
            # body
            d.line([(bx+50, 100), (bx+50, 250)], fill="#c42a6b", width=2)
            d.line([(bx+50, 140), (bx+10, 100)], fill="#c42a6b", width=2)
            d.line([(bx+50, 140), (bx+90, 100)], fill="#c42a6b", width=2)
            d.line([(bx+50, 250), (bx+15, 330)], fill="#c42a6b", width=2)
            d.line([(bx+50, 250), (bx+85, 330)], fill="#c42a6b", width=2)
            d.text((bx+15, 360), f"体型 {chr(65+j)}", fill="#94a3b8", font=get_font(14))
        d.text((60, 530), f"角色参考 #{i+1} — 体型/服饰/发型", fill="#94a3b8", font=get_font(18))
    make_preview(slug, i+1, "#fdf5f8", "#c42a6b", fn)

# 8. 分镜模板专业套装
slug = "storyboard-pro"
make_cover(slug, "分镜模板套装", "framing")
for i in range(4):
    layouts = [(2, 3), (3, 2), (2, 2), (1, 3)]
    def fn(d, i=i):
        rows, cols = layouts[i]
        draw_grid(d, 80, 60, cols, rows, 180, 180, "#1e6b8b", 2)
        # fill some cells with patterns
        for r in range(rows):
            for c in range(cols):
                cx = 80 + c * 180 + 90
                cy = 60 + r * 180 + 90
                d.rectangle([(cx-40, cy-30), (cx+40, cy+30)], outline="#5b86b5", width=1)
        d.text((60, 530), f"分格模板 #{i+1} — {rows}x{cols} 布局", fill="#94a3b8", font=get_font(18))
    make_preview(slug, i+1, "#f0f4fa", "#1e6b8b", fn)

print("Done! Generated covers and previews in public/images/")
print(f"  covers:  {len(os.listdir(COVERS))} files")
print(f"  previews: {len(os.listdir(PREVIEWS))} files")
