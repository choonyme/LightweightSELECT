### Lightweight Javascript SELECT Decorator

A lightweight Javascript that decorates the HTML SELECT dropdown button.

by Choon Jin Ng

### Note

This Javascript searches for all SELECT elements and append additional structures to support a decorated SELECT.
You MUST NOT change the created structure. Specifically, the original SELECT must be placed immediately next to the newly created SELECT.

The Lightweight SELECT is wrapped by the .selectSet class. It contains a combo box (.select class), a dropdown menu (.selectMenu class), and a dropdown menu items (.selectMenu li class).

The .selectSet element is also given ID of select[original SELECT name]. So make sure you assign a name attribute to your original SELECT.

### Using Lightweight, CSS & Customizing It

Include the Javascript:

```html
<script type="text/javascript" src="lightweightSelect.js"></script>
```

Include the following CSS in order to customize the Lightweight Select:

<code>
/* hide original SELECT */
select.styled{
	display: none;
}

/* the Lightweight select wrapper */
.selectSet {
    position: relative;
}

/* the combo box */
.selectSet .select {
	padding: 5px 20px;
    color: #000000;
    background: url(select.png) 0 0 no-repeat;
    width: 200px;
}

/* the dropdown menu */
.selectSet .selectMenu {
    padding: 0;
    margin: 0;
    background: #ffffff;
    display: none;
    position: absolute;
    min-width: 200px;
    border: 1px solid #794488;
    z-index: 999;
    top: 20px;
    *top: 26px;
    left: 5px;
    cursor: pointer;
}

/* the dropbox items */
.selectSet .selectMenu li {
    list-style: none;
    padding: 5px; 
}

/* the dropbox items on hover */
.selectSet .selectMenu li:hover {
	background: #efefef;
}
</code>

### Contact

e-mail: cj@5eejay.com

### License

Please read the LICENSE file.