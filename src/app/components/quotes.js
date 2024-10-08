const quotes = {
    seductive: [
        "Work hard now, and soon enough, you won’t have to chase the girls—money will do that for you.",
        "Hustle first, then let the chicks come to the man with the plan.",
        "Focus on building, not chasing. The rest will follow.",
        "Get the money right, and they’ll swipe right!",
        "Show me your hustle, and I’ll show you my heart.",
        "Work hard, play hard, and watch the world come to you.",
        "Success is the best cologne, bro—wear it well!",
        "Be the type of man that attracts success effortlessly.",
      ],
    funny: [
      "Bro, work now so your future self can chill.",
      "Don't be lazy now, or your future self will roast you.",
      "Hustle hard, bro, because money talks, and excuses walk.",
      "Grind today so tomorrow you can flex without guilt.",
      "If you think adventure is dangerous, try routine; it's lethal.",
      "You're only one workout away from a good mood... or a sore back!",
      "Stop waiting for Friday. Do something today! Even if it's just napping.",
      "Remember, the only bad workout is the one that didn’t happen.",
    ],
    motivational: [
      "You got this, bro. Keep pushing; success isn’t far.",
      "The grind is tough, but the view from the top is worth it.",
      "Consistency, not motivation, will take you there. Keep at it!",
      "Dream big, work hard, and make the impossible possible.",
      "Every step counts, bro—just keep stepping.",
      "Don’t limit your challenges; challenge your limits.",
      "Success is not for the lazy—let’s hustle!",
      "Stay positive; work hard; make it happen.",
    ],
    rich: [
      "Bro, get rich first, then talk about the lifestyle.",
      "Think like a rich guy: Invest, hustle, repeat.",
      "Don’t buy that watch until your hustle can buy it twice.",
      "Forget looking rich—be rich, bro. Real wealth is silent.",
      "Money is a tool; use it wisely, and it’ll build your empire.",
      "The road to riches is paved with discipline and hustle.",
      "Don’t count the days; make the days count, and your bank account will follow.",
      "Wealth isn’t just about having money; it’s about having options.",
    ],
    discipline: [
      "Discipline is doing it even when you don’t feel like it.",
      "Wake up and grind, bro. Motivation is temporary; discipline is permanent.",
      "You can’t build a legacy on lazy mornings.",
      "Skip the party now; your success party will be even bigger.",
      "Every day is a new chance to improve yourself—take it.",
      "Discipline is the bridge between goals and accomplishment.",
      "Make discipline your best friend; it will take you places.",
      "Stay focused; the future is built today, not tomorrow.",
    ],
    enjoyment: [
      "Enjoy the process, bro; the hustle will be worth it.",
      "Balance the grind with a little chill—work hard, play harder.",
      "Take a break, bro; success isn’t built in a day.",
      "Enjoy the small wins; they’re the foundation of big victories.",
      "Life is about enjoying the journey, not just the destination.",
      "Remember to smile; it confuses people who are trying to figure you out.",
      "Celebrate the small victories, bro—they keep you going!",
      "Life is short; enjoy every moment, even the grind.",
    ],
  };
  
  // Function to get a random quote
const getRandomQuote = () => {
    const categories = Object.keys(quotes);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const categoryQuotes = quotes[randomCategory];
    const randomQuote = categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
    return randomQuote;
  };
  
  // Exporting both quotes and the getRandomQuote function
  export { quotes, getRandomQuote };
  