---
layout: default
title: C2FO UI Guide -- Colors
---
<h1 class="heading heading--large">Colors</h1>

This is the C2FO standard color palette. All colors have a name which correspond directly with a less variable. For example, the color "primary" has comes from the less variable <code>@color-primary</code> or scss variable <code>$color-primary</code>.

Although a variable exists for each color this is not how our colors should be used in our codebase. See <a href="#color-usage">usage</a> for how to properly extend these in less and scss.

<h2 class="heading">Supported</h2>

Do not use the HEX values directly. These values
are shown so it's easy to compare colors and for
designers to see how close the colors are to a
given call out.

<h3>Informative State Colors</h3>

Colors with names like "success" and "warning" should be used to indicate how something is doing. For example you may use some of these colors to show that something is activated or successful.

The intent of these colors is to be used as variables within a mixin via using :extend(.color-mixin) that way we have less CSS rules created. The selector count will be the same eitherway. Since we are using a preprocessor we'll be able to read what the intent as well as produce better CSS.

{% include_relative color_examples.html %}

<h2 class="heading" id="color-usage">Usage</h2>

Colors are expected to be used via a <code>&amp;:extend(.color)</code>
within a given LESS/SASS declaration. For example:
<p>Less:</p>
<pre>html {
    &:extend(.text-color);
    &:extend(.background-color);
}</pre>
<p>Scss:</p>
<pre>html {
    @extend .text-color;
    @extend .background-color;
}</pre>

There are two ways to apply color:

* <code>.background-color--NAME</code>
* <code>.text-color--NAME</code>

Below are all the possible options:

{% include_relative color_options.html %}

<pre><code class="js-code-sample">{% include_relative color_options.html %}</code></pre>
