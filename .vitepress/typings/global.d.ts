export namespace Layout {

  /**
   * 链接属性
   * -------------------------------------------- */
  type Link = {
    /** 链接文本 */
    label: string;
    /** 链接地址 */
    href: string;
    /** 链接目标，默认是 _self，指定是否在新标签页打开 */
    target?: '_self' | '_blank';
    /** 链接的图标，提供视觉辅助（可选） */
    icon?: string;
    /** 链接的描述信息，作为辅助说明（可选） */
    description?: string;
    /** 是否需要在导航中显示（默认为true） */
    visible?: boolean;
    /** 链接的类别（如导航栏、底部栏等） */
    category?: 'navbar' | 'footer' | 'sidebar' | 'custom';
  };
  /** 链接分组属性 */
  type LinkGroup = {
    /** 分组名称 */
    name: string;
    /** 分组内的链接 */
    links: Link[];
    /** 分组的排序位置（决定在多个分组中显示的顺序） */
    order?: number;
    /** 是否在导航中显示该分组（默认为 true） */
    visible?: boolean;
    /** 分组的样式类（用于自定义样式） */
    className?: string;
    /** 分组的描述信息（可以用作分组标题下的简短介绍） */
    description?: string;
    /** 分组的图标（用于视觉展示） */
    icon?: string;
    /** 是否允许展开（可用于可折叠导航） */
    collapsible?: boolean;
  };
}
