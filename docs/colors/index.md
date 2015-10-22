---
layout: default
title: UI Guide -- Colors
---
<h1 class="heading heading--large">Colors</h1>

This page contains all the colors that may be used
when consuming the ui-guide.

<h2 class="heading">Supported</h2>

Do not use the HEX values directly. These values
are shown so it's easy to compare colors and for
designers to see how close the colors are to a
given call out.

{% include_relative color_examples.html %}

<h2 class="heading">Usage</h2>

Colors are expected to be used via a <code>&amp;:extend(.color)</code>
within a given LESS declaration. For example:

<pre>html {
    &:extend(.text-color);
    &:extend(.background-color);
}</pre>

There are two ways to apply color:

* <code>.background-color--NAME</code>
* <code>.text-color--NAME</code>

Below are all the possible options:

{% include_relative color_options.html %}

<pre><code class="js-code-sample">{% include_relative color_options.html %}</code></pre>
