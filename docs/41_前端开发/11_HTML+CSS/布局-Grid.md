# 布局之Grid的魅力

## 圣杯布局

<div class="w-full grid grid-cols-[1fr_3fr_1fr] grid-rows-[auto_1fr_auto]" style="aspect-ratio: 16 / 9;">
  <header class="col-span-3 bg-blue-500 p-4 text-white"> Header Content </header>
  <aside class="bg-gray-200 p-4 text-black"> Left Sidebar  </aside>
  <main class="bg-white p-4 text-black"> Main Content </main>
  <aside class="bg-gray-200 p-4 text-black"> Right Sidebar </aside>
  <footer class="col-span-3 bg-blue-500 p-4 text-white"> Footer Content </footer>
</div>

## 瀑布布局

```css
.grid {
  /* 行自动填充，最小宽度100px，最大宽度为1fr;*/
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  /* 行自动填充，平均三等分 */
  grid-template-columns: repeat(3, 1fr);
}
```

<div class="grid gap-20px" style=" grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));grid-auto-rows: 50px;">
<div class="bg-primary"></div>
<div class="bg-primary"></div>
<div class="bg-primary"></div>
<div class="bg-primary"></div>
<div class="bg-primary"></div>
<div class="bg-primary"></div>
<div class="bg-primary"></div>
<div class="bg-primary"></div>
<div class="bg-primary"></div>
<div class="bg-primary"></div>
</div>
