# Git操作

遍历文件获取第一次提交的信息

```shell
echo "file,filename,hash,date,author,email,comment" > commit.txt

git ls-files -r --name-only "$branch" | while read file; do
  # 截取最后一个 "/" 后面的文件名
  filename="${file##*/}"
  # 输出第一次提交信息
  log=$(git log --reverse --pretty=format:"%h,%ad,%an,%ae,%s" --date=format:%Y/%m/%d -- "$file" | head -n 1)
  echo "$file,$filename,$log" >> commit.txt
done
```
