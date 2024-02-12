const formatValue = (p, param) => p[param].value.toLowerCase().replace(/\s/g, "-");

intent("What are the top headlines at the moment?", (p) => {
    p.play({ command: "fetchLatestNews" });
    p.play("Here are some of the top headlines right now");
});

intent("Provide me with the latest $(category* (.*)) news", (p) => {
    const value = formatValue(p, "category");
    
    p.play({ command: "fetchNewsByCategories", category: value });
    p.play(`Absolutely! Let's dive into the latest ${p.category.value} news`);
});

intent("What's happening in the world of $(term* (.*))?", (p) => {
    const value = formatValue(p, "term");
    
    p.play({ command: "fetchNewsByTerms", term: value });
    p.play(`Let's take a journey through the latest happenings in ${p.term.value}`);
});

intent("Tell me about recent articles from $(source* (.*))", (p) => {
    const value = formatValue(p, "source");
    
    p.play({ command: "fetchNewsBySources", source: value });
    p.play(`Sure! Here's a summary of some recent articles from ${p.source.value}`);
});
