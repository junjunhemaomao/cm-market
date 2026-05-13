// ============================================================
// ComicMaster Material Market — Pack Data
// 图片放在 images/<素材包中文名>/ 下
// ============================================================

const packs = [
  // ==================================================
  // 分镜模板系列
  // ==================================================

  {
    id: 1,
    slug: "framing-basics",
    name: "分镜基础入门（免费）",
    description: `极简泛化分镜规律入门包。

包含内容:
- 基础镜头角度参考
- 分格节奏模板 12 组
- 构图引导线 8 组`,
    price: 0,
    cover_url: "images/分镜基础入门/cover.png",
    previews: ["images/分镜基础入门/1.png", "images/分镜基础入门/2.png", "images/分镜基础入门/3.png", "images/分镜基础入门/4.png"],
    tags: ["分镜", "基础", "镜头", "构图", "模板", "入门", "免费"],
    file_count: 32, file_size: "45MB", resolution: "2000x2000px",
    category: "分镜模板", style: "通用", character: "无",
    is_featured: true, is_active: true,
    pan_link: "", pan_code: "",
    created_at: "2025-01-15"
  },
  {
    id: 2,
    slug: "scene-framing",
    name: "完整场景分镜结构（轻量版）",
    description: `覆盖常见漫画场景的完整分镜结构数据包。

包含内容:
- 日常/战斗/情感场景分镜结构各 20+ 组
- 条漫纵向节奏模板 15 组
- 页漫画格布局方案 18 组`,
    price: 0,
    cover_url: "images/场景分镜结构/cover.png",
    previews: ["images/场景分镜结构/1.png", "images/场景分镜结构/2.png", "images/场景分镜结构/3.png", "images/场景分镜结构/4.png", "images/场景分镜结构/5.png"],
    tags: ["分镜", "场景", "条漫", "页漫", "节奏", "转场", "中级", "叙事"],
    file_count: 78, file_size: "128MB", resolution: "2000x2000px",
    category: "分镜模板", style: "通用", character: "无",
    is_featured: true, is_active: true,
    pan_link: "https://pan.baidu.com/s/1EXAMPLE", pan_code: "abcd",
    created_at: "2025-02-20"
  },
  {
    id: 3,
    slug: "pro-framing",
    name: "全维度分镜大数据（专业版）",
    description: `行业级结构化分镜数据库。

包含内容:
- 全维度镜头大数据 500+ 组
- 齐夫定律分格分布模型
- 情绪-构图映射表`,
    price: 0,
    cover_url: "images/专业分镜数据/cover.png",
    previews: ["images/专业分镜数据/1.png", "images/专业分镜数据/2.png", "images/专业分镜数据/3.png", "images/专业分镜数据/4.png", "images/专业分镜数据/5.png", "images/专业分镜数据/6.png"],
    tags: ["分镜", "专业", "大数据", "齐夫定律", "情绪映射", "节奏", "行业级", "高级"],
    file_count: 520, file_size: "380MB", resolution: "2400x2400px",
    category: "分镜模板", style: "通用", character: "无",
    is_featured: true, is_active: true,
    pan_link: "https://pan.baidu.com/s/2EXAMPLE", pan_code: "efgh",
    created_at: "2025-03-10"
  },
  {
    id: 4,
    slug: "storyboard-pro",
    name: "分镜模板专业套装",
    description: `专业漫画分镜模板大合集。

包含内容:
- 少年漫分格模板 25 组
- 少女漫分格模板 20 组
- 青年漫分格模板 18 组
- 四格/八格模板 10 组
- 跨页大格布局 12 组`,
    price: 0,
    cover_url: "images/分镜模板套装/cover.png",
    previews: ["images/分镜模板套装/1.png", "images/分镜模板套装/2.png", "images/分镜模板套装/3.png", "images/分镜模板套装/4.png"],
    tags: ["分镜", "模板", "少年漫", "少女漫", "青年漫", "跨页", "高级", "专业"],
    file_count: 95, file_size: "175MB", resolution: "2400x2400px",
    category: "分镜模板", style: "通用", character: "无",
    is_featured: true, is_active: true,
    pan_link: "https://pan.baidu.com/s/7EXAMPLE", pan_code: "yzab",
    created_at: "2025-06-01"
  },
  // ==================================================
  // 战斗素材系列
  // ==================================================

  {
    id: 5,
    slug: "battle-core",
    name: "战斗动作核心库",
    description: `漫画战斗场景核心素材库。

包含内容:
- 泛战斗姿势库 4,300+ 张
- 涵盖近身格斗、兵器对战`,
    price: 0,
    cover_url: "images/战斗动作核心库/cover.png",
    previews: ["images/战斗动作核心库/1.png", "images/战斗动作核心库/2.png", "images/战斗动作核心库/3.png", "images/战斗动作核心库/4.png", "images/战斗动作核心库/5.png", "images/战斗动作核心库/6.png"],
    tags: ["战斗", "格斗", "动作", "姿势", "攻防", "核心", "高级"],
    file_count: 4300, file_size: "2.8GB", resolution: "2000x2000px",
    category: "动作", style: "通用", character: "通用角色",
    is_featured: true, is_active: true,
    pan_link: "https://pan.baidu.com/s/8EXAMPLE", pan_code: "bcor",
    created_at: "2025-07-01"
  },
  {
    id: 6,
    slug: "battle-effects",
    name: "战斗特效与受击包",
    description: `战斗场景中的特效表现和受击反馈素材。

包含内容:
- 受击反馈 129 张
- 枪战场面 98 张
- 聚气蓄力 70 张`,
    price: 0,
    cover_url: "images/战斗特效与受击包/cover.png",
    previews: ["images/战斗特效与受击包/1.png", "images/战斗特效与受击包/2.png", "images/战斗特效与受击包/3.png", "images/战斗特效与受击包/4.png"],
    tags: ["战斗", "特效", "受击", "枪战", "技能", "中级"],
    file_count: 580, file_size: "420MB", resolution: "2000x2000px",
    category: "动作", style: "通用", character: "通用角色",
    is_featured: true, is_active: true,
    pan_link: "https://pan.baidu.com/s/9EXAMPLE", pan_code: "befx",
    created_at: "2025-07-15"
  },
  // ==================================================
  // 动作素材系列
  // ==================================================

  {
    id: 7,
    slug: "daily-actions",
    name: "日常动作大全",
    description: `漫画角色日常动作素材库。

包含内容:
- 日常饮食动作 777 张
- 移动姿态 503 张
- 躺睡起床 446 张
- 坐姿 321 张`,
    price: 0,
    cover_url: "images/日常动作大全/cover.png",
    previews: ["images/日常动作大全/1.png", "images/日常动作大全/2.png", "images/日常动作大全/3.png", "images/日常动作大全/4.png", "images/日常动作大全/5.png"],
    tags: ["动作", "日常", "饮食", "移动", "坐姿", "躺睡", "基础"],
    file_count: 2080, file_size: "1.4GB", resolution: "2000x2000px",
    category: "动作", style: "通用", character: "通用角色",
    is_featured: true, is_active: true,
    pan_link: "https://pan.baidu.com/s/10EXAMPLE", pan_code: "dact",
    created_at: "2025-08-01"
  },
  {
    id: 8,
    slug: "social-gestures",
    name: "社交互动动作包",
    description: `角色社交互动和沟通表达的动作素材。

包含内容:
- 伸手指向 421 张
- 打电话 123 张
- 读看写 106 张
- 回头 113 张`,
    price: 0,
    cover_url: "images/社交互动动作包/cover.png",
    previews: ["images/社交互动动作包/1.png", "images/社交互动动作包/2.png", "images/社交互动动作包/3.png", "images/社交互动动作包/4.png"],
    tags: ["动作", "社交", "互动", "指向", "沟通", "对话", "中级"],
    file_count: 1070, file_size: "780MB", resolution: "2000x2000px",
    category: "动作", style: "通用", character: "通用角色",
    is_featured: false, is_active: true,
    pan_link: "https://pan.baidu.com/s/11EXAMPLE", pan_code: "sges",
    created_at: "2025-08-15"
  },
  {
    id: 9,
    slug: "special-angles",
    name: "特殊视角与姿态包",
    description: `非常规视角和特殊姿态素材。

包含内容:
- 俯视视角 188 张
- 仰视视角 107 张
- 掉落/滑倒 61 张
- 转身离开 59 张`,
    price: 0,
    cover_url: "images/特殊视角与姿态包/cover.png",
    previews: ["images/特殊视角与姿态包/1.png", "images/特殊视角与姿态包/2.png", "images/特殊视角与姿态包/3.png", "images/特殊视角与姿态包/4.png"],
    tags: ["动作", "视角", "俯视", "仰视", "特殊姿态", "构图", "中级"],
    file_count: 600, file_size: "430MB", resolution: "2000x2000px",
    category: "动作", style: "通用", character: "通用角色",
    is_featured: false, is_active: true,
    pan_link: "https://pan.baidu.com/s/12EXAMPLE", pan_code: "sang",
    created_at: "2025-09-01"
  },
  // ==================================================
  // 表情素材系列
  // ==================================================

  {
    id: 10,
    slug: "positive-emotions",
    name: "正面情绪表情包",
    description: `漫画角色正面情绪表情素材。

包含内容:
- 亲密关系 581 张
- 微笑 301 张
- 自信握拳 122 张
- 兴奋激动 102 张`,
    price: 0,
    cover_url: "images/正面情绪表情包/cover.png",
    previews: ["images/正面情绪表情包/1.png", "images/正面情绪表情包/2.png", "images/正面情绪表情包/3.png", "images/正面情绪表情包/4.png"],
    tags: ["表情", "情绪", "正面", "微笑", "亲密", "自信", "中级"],
    file_count: 1164, file_size: "820MB", resolution: "2000x2000px",
    category: "角色", style: "通用", character: "通用角色",
    is_featured: true, is_active: true,
    pan_link: "https://pan.baidu.com/s/13EXAMPLE", pan_code: "pemo",
    created_at: "2025-09-15"
  },
  {
    id: 11,
    slug: "negative-emotions",
    name: "负面情绪表情包",
    description: `漫画角色负面情绪表情素材。

包含内容:
- 惊讶惊恐 866 张
- 黑化邪恶 292 张
- 失望沮丧 212 张
- 愤怒 190 张
- 哭泣 139 张`,
    price: 0,
    cover_url: "images/负面情绪表情包/cover.png",
    previews: ["images/负面情绪表情包/1.png", "images/负面情绪表情包/2.png", "images/负面情绪表情包/3.png", "images/负面情绪表情包/4.png", "images/负面情绪表情包/5.png"],
    tags: ["表情", "情绪", "负面", "惊恐", "愤怒", "黑化", "哭泣", "高级"],
    file_count: 1880, file_size: "1.3GB", resolution: "2000x2000px",
    category: "角色", style: "通用", character: "通用角色",
    is_featured: true, is_active: true,
    pan_link: "https://pan.baidu.com/s/14EXAMPLE", pan_code: "nemo",
    created_at: "2025-10-01"
  },
  {
    id: 12,
    slug: "neutral-emotions",
    name: "中性情绪表情包",
    description: `漫画角色中性/复合情绪表情素材。

包含内容:
- 思考疑问 409 张
- 尴尬无奈 115 张
- 紧张 73 张
- 警觉 69 张`,
    price: 0,
    cover_url: "images/中性情绪表情包/cover.png",
    previews: ["images/中性情绪表情包/1.png", "images/中性情绪表情包/2.png", "images/中性情绪表情包/3.png", "images/中性情绪表情包/4.png"],
    tags: ["表情", "情绪", "中性", "思考", "紧张", "警觉", "中级"],
    file_count: 826, file_size: "590MB", resolution: "2000x2000px",
    category: "角色", style: "通用", character: "通用角色",
    is_featured: false, is_active: true,
    pan_link: "https://pan.baidu.com/s/15EXAMPLE", pan_code: "nuel",
    created_at: "2025-10-15"
  },
  // ==================================================
  // 对话素材系列
  // ==================================================

  {
    id: 13,
    slug: "solo-dialogue",
    name: "单人说话模板包",
    description: `漫画单人独白/旁白/台词场景素材。

包含内容:
- 单人说话姿态 2,000+ 张
- 覆盖不同角度和情绪`,
    price: 0,
    cover_url: "images/单人说话模板包/cover.png",
    previews: ["images/单人说话模板包/1.png", "images/单人说话模板包/2.png", "images/单人说话模板包/3.png", "images/单人说话模板包/4.png", "images/单人说话模板包/5.png"],
    tags: ["对话", "单人", "说话", "独白", "台词", "口型", "基础"],
    file_count: 2013, file_size: "1.4GB", resolution: "2000x2000px",
    category: "角色", style: "通用", character: "通用角色",
    is_featured: true, is_active: true,
    pan_link: "https://pan.baidu.com/s/16EXAMPLE", pan_code: "solo",
    created_at: "2025-11-01"
  },
  {
    id: 14,
    slug: "duo-dialogue",
    name: "双人对话模板包",
    description: `漫画双人对话互动场景素材。

包含内容:
- 双人对话场景 1,500+ 张
- 多角度双人构图`,
    price: 0,
    cover_url: "images/双人对话模板包/cover.png",
    previews: ["images/双人对话模板包/1.png", "images/双人对话模板包/2.png", "images/双人对话模板包/3.png", "images/双人对话模板包/4.png"],
    tags: ["对话", "双人", "互动", "交流", "构图", "中级"],
    file_count: 1542, file_size: "1.1GB", resolution: "2000x2000px",
    category: "角色", style: "通用", character: "通用角色",
    is_featured: false, is_active: true,
    pan_link: "https://pan.baidu.com/s/17EXAMPLE", pan_code: "duo",
    created_at: "2025-11-15"
  },
  // ==================================================
  // 其他素材系列
  // ==================================================

  {
    id: 15,
    slug: "close-ups",
    name: "手眼头部特写合集",
    description: `漫画特写镜头素材。

包含内容:
- 手部特写 632 张
- 人头部 107 张
- 眼特写 44 张`,
    price: 0,
    cover_url: "images/手眼头部特写合集/cover.png",
    previews: ["images/手眼头部特写合集/1.png", "images/手眼头部特写合集/2.png", "images/手眼头部特写合集/3.png", "images/手眼头部特写合集/4.png"],
    tags: ["特写", "手部", "眼部", "头部", "细节", "中级"],
    file_count: 791, file_size: "550MB", resolution: "2000x2000px",
    category: "角色", style: "通用", character: "通用角色",
    is_featured: true, is_active: true,
    pan_link: "https://pan.baidu.com/s/18EXAMPLE", pan_code: "clup",
    created_at: "2025-12-01"
  },
  {
    id: 16,
    slug: "scene-backgrounds",
    name: "场景背景素材包",
    description: `漫画常用场景背景素材。

包含内容:
- 空风景 491 张
- 校园场景 126 张`,
    price: 0,
    cover_url: "images/场景背景素材包/cover.png",
    previews: ["images/场景背景素材包/1.png", "images/场景背景素材包/2.png", "images/场景背景素材包/3.png", "images/场景背景素材包/4.png"],
    tags: ["场景", "背景", "风景", "校园", "自然", "环境", "中级"],
    file_count: 630, file_size: "480MB", resolution: "2400x2000px",
    category: "场景", style: "日系", character: "无",
    is_featured: true, is_active: true,
    pan_link: "https://pan.baidu.com/s/19EXAMPLE", pan_code: "scbg",
    created_at: "2025-12-15"
  },
  {
    id: 17,
    slug: "character-entrance",
    name: "角色登场亮相包",
    description: `漫画角色登场和亮相场景素材。

包含内容:
- 角色亮相 248 张
- 小孩角色 111 张
- 围观/人群 71 张
- 群像 35 张`,
    price: 0,
    cover_url: "images/角色登场亮相包/cover.png",
    previews: ["images/角色登场亮相包/1.png", "images/角色登场亮相包/2.png", "images/角色登场亮相包/3.png", "images/角色登场亮相包/4.png"],
    tags: ["角色", "亮相", "登场", "群像", "出场", "中级"],
    file_count: 472, file_size: "340MB", resolution: "2000x2000px",
    category: "角色", style: "通用", character: "通用角色",
    is_featured: false, is_active: true,
    pan_link: "https://pan.baidu.com/s/20EXAMPLE", pan_code: "cent",
    created_at: "2026-01-01"
  },
  {
    id: 18,
    slug: "animals",
    name: "动物素材包",
    description: `漫画常用动物素材。

包含内容:
- 各类动物 186 张
- 涵盖猫/狗/鸟/马等常见物种`,
    price: 0,
    cover_url: "images/动物素材包/cover.png",
    previews: ["images/动物素材包/1.png", "images/动物素材包/2.png", "images/动物素材包/3.png"],
    tags: ["动物", "猫", "狗", "鸟", "生物", "入门"],
    file_count: 186, file_size: "120MB", resolution: "2000x2000px",
    category: "场景", style: "通用", character: "无",
    is_featured: false, is_active: true,
    pan_link: "https://pan.baidu.com/s/21EXAMPLE", pan_code: "anim",
    created_at: "2026-01-15"
  },
  {
    id: 19,
    slug: "tech-mecha",
    name: "科技机甲物件包",
    description: `漫画科技和机甲相关物件素材。

包含内容:
- 科技/机甲/宇宙 127 张
- 控制室场景 22 张`,
    price: 0,
    cover_url: "images/科技机甲物件包/cover.png",
    previews: ["images/科技机甲物件包/1.png", "images/科技机甲物件包/2.png", "images/科技机甲物件包/3.png"],
    tags: ["物件", "科技", "机甲", "科幻", "设备", "入门"],
    file_count: 158, file_size: "105MB", resolution: "2000x2000px",
    category: "场景", style: "科幻", character: "无",
    is_featured: false, is_active: true,
    pan_link: "https://pan.baidu.com/s/22EXAMPLE", pan_code: "tech",
    created_at: "2026-02-01"
  }
];
