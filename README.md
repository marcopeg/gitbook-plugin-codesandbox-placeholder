# gitbook-plugin-codesandbox-placeholder

Super duper basic CodeSandbox integration for Gitbook 3.x.

### book.json

```json
{
    "plugins": [
        "codesandbox-placeholder"
    ],
    "codesandbox-placeholder": {
        "height": "300px",
        "width": "100%",
        "style": "{css applied to the iframe}",
        "theme": "dark|light",
        "view": "editor|split|preview",
        "runonclick": "0|1",
        "editorsize:": "50"
    }
}
```

### Embed your CodeSandbox:

Embed a working Link to a CodeSandbox:

```
{% codesandbox id="react-101-mzkeh" %}{% endcodesandbox %}

{% codesandbox id="react-101-mzkeh", height="400px", view="editor" %}{% endcodesandbox %}
```

Link to a CodeSandbox:

```
{% codesandbox id="mzkeh", link="Click here to go to open the Sandbox", title="custom title", target="_self" %}{% endcodesandbox %}
```

_Default targets to `_blank`._

Add a CodeSandbox Button:

```
{% codesandbox id="mzkeh", button="1" %}{% endcodesandbox %}
```

### Otions & Values

All the accepted options are listed in the example above. For values and defaults please
refer to: https://codesandbox.io/docs/embedding.