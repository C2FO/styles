---
layout: default
title: UI Guide -- Colors
---
<h1 class="heading heading--large">Colors</h1>

<p>
This page contains all the colors that may be used
when consuming the ui-guide.
</p>

<h2 class="heading">Supported</h2>

<p>
Do not use the HEX values directly. These values
are shown so it's easy to compare colors and for
designers to see how close the colors are to a
given call out.
</p>

{% include_relative color_examples.html %}

<h2 class="heading">Usage</h2>

<p>
Colors are expected to be used via a <code>&amp;:extend(.color)</code>
within a given LESS declaration. For example:
</p>

<pre>html {
    &:extend(.text-color);
    &:extend(.background-color);
}</pre>

<p>
There are two ways to apply color:
</p>

<ul class="list">
    <li><code>.background-color--NAME</code></li>
    <li><code>.text-color--NAME</code></li>
</ul>

<p>
Below are all the possible options:
</p>

{% include_relative color_options.html %}

<pre><code class="js-code-sample">{% include_relative color_options.html %}</code></pre>
