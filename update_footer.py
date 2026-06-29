import os

footer_link = '<a class="font-label-caps text-label-caps text-on-surface-variant hover:underline decoration-primary transition-all" href="/careers.html">Careers</a>'
footer_link_2 = '<a class="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:underline decoration-primary transition-all" href="/careers.html">Careers</a>'
footer_link_3 = '<a class="text-on-surface-variant font-label-caps text-label-caps hover:underline decoration-primary transition-all uppercase" href="/careers.html">Careers</a>'

for file in os.listdir('.'):
    if file.endswith('.html') and file != 'careers.html':
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # We find where Clinical Data is in the footer, and insert Careers right after it.
        content = content.replace('href="/clinical-evidence.html">Clinical Data</a>\n</div>', 'href="/clinical-evidence.html">Clinical Data</a>\n<a class="font-label-caps text-label-caps text-on-surface-variant hover:underline decoration-primary transition-all" href="/careers.html">Careers</a>\n</div>')
        content = content.replace('href="/clinical-evidence.html">Clinical Data</a>\n</div>\n</div>', 'href="/clinical-evidence.html">Clinical Data</a>\n<a class="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:underline decoration-primary transition-all" href="/careers.html">Careers</a>\n</div>\n</div>')
        content = content.replace('href="/clinical-evidence.html">Clinical Data</a>\n</div>\n</footer>', 'href="/clinical-evidence.html">Clinical Data</a>\n<a class="text-on-surface-variant font-label-caps text-label-caps hover:underline decoration-primary transition-all uppercase" href="/careers.html">Careers</a>\n</div>\n</footer>')
        content = content.replace('href="/clinical-evidence.html">Clinical Data</a>\n</div>\n</div>\n</footer>', 'href="/clinical-evidence.html">Clinical Data</a>\n<a class="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:underline decoration-primary transition-all" href="/careers.html">Careers</a>\n</div>\n</div>\n</footer>')
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
