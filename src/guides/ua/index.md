# 使用KISSY UA(检测userAgent类型)

## 在页面中引入UA
```
<script src="seed.js"></script>
<script>
    KISSY.use('ua',function(S,UA){
        alert(UA); // UA可以使用了
    });
</script>
```
也可以直接引入core来使用ua，ua是core的子模块（不推荐）
```
<script src="seed.js"></script>
<script>
    KISSY.use('core',function(S){
        alert(S.UA); //KISSY.UA可以使用了
    });
</script>
```
## 判断浏览器类型
```
<script>
    KISSY.use('ua',function(S,UA){
        if(UA.chrome > 0){
            alert('Your browser is chrome');
        }else if(UA.safari > 0){
            alert('Your browser is safari');
        }else if(UA.opera > 0){
            alert('Your browser is opera');
        }else if(UA.firefox > 0){
            alert('Your browser is firefox');
        }else if(UA.ie > 0){
            alert('Your browser is ie');
        }else{
            alert('Your browser is unknown');
        }
    });
</script>
```
## 判断浏览器版本
```
<script>
    KISSY.use('ua',function(S,UA){
        if(UA.ie == 6){
            alert('Your browser is ie and version is 6');
        }else if(UA.ie == 7){
            alert('Your browser is ie and version is 7');
        }
    });
</script>
```

### Note
版本号也可以通过UA[UA.shell]来获取，版本号遵循以下规则：

- 表示当前引擎或浏览器的版本。版本号 1.2.3.4 会转换为数值 1.234
- 如果不是当前引擎或浏览器，返回 0 或者 undefined
- 如果当前浏览器版本号无法准确判定，均返回 0.1