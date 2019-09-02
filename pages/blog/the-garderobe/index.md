page_title: THEMONSTROUSCAVALCA.DE - The Garderobe
template: page.html
extended_classes: blog garderobe-index
jinja_pass: True
is_index: True

# The Garderobe

## Awful Snippets From The Sewer

Concealed at the back of the curator's castle is **The Garderobe**, a grimy hovel splattered with the curator's terrible sludge.
While a lot of what the curator produces, though horrific, holds some morbid fascination for the general public, a small proportion
of his output just winds up gumming up the passage to the cesspit, stagnant and devoid of attention.

What follows is an examination of a selection of these unloved nuggets, plucked from the clotted mass with a pair of tweezers.  These
small postmortems are of _tweets_ that received zero likes, retweets and replies and can be considered nothing but failures, despite the 
curator being somewhat fond of their formation.

The curator isn't sure that any of these sewer dumplings are really worth pulling into the light, but he's going to do it anyway because
otherwise this blog section would be entirely empty. It also offers an opportunity for the curator to take a second look at his own thought processes
in the hope they might one day provide a warning of the onset of some mental disorder.

<ul>
{% for page_path, page in GLOBALS["site"].page_reference["/ill-conceptions/the-garderobe"] %}
    {% if not page.data("is_index", False) %}
        <li><a href="{{ page.target_url }}">{{ page.data("sub_title", "") }}</a> {{ page.data("tag-line", "") }}</li>
    {% endif %}
{% endfor %}
</ul>