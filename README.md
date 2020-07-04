# Pembuatan library seperti jQuery

tapi versi kecilnya aja ya :D

# instalation

`npm install jquery-lite`

# Example

```
<h1>h1</h1>
<h2>h2</h2>
<h3>h3</h3>
<h4>h4</h4>
```

# Import

```
import $ from 'jquery-lite'
```

# Add Event

```
$('h1').on("click", function () {
  alert("h1 Clicked")
})
```

# Add Class

```
$('h2').attr("class", "new-class")

```

# Hide Element

```
$('h3').hide()

```
