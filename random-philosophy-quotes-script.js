var quotes = ["The unexamined life is not worth living :- Socrates",
"Whereof one cannot speak, thereof one must be silent :- Ludwig Wittgenstein",
"Entities should not be multiplied unnecessarily :- William of Ockham",
"I think therefore I am :- Rene Descartes",
"He who thinks great thoughts, often makes great errors :- Martin Heidegger",
"We live in the best of all possible worlds :- Gottfried Wilhelm Leibniz",
"What is rational is actual and what is actual is rational :- G.W.F Hegel",
"There is but one truly serious philosophical problem, and that is suicide :- Albert Camus",
"One cannot step twice in the same river :- Heraclitus", "To be is to be perceived :- Bishop Gorge Berkeley",
"Happiness is not an ideal of reason but of imagination :- Immanuel Kant",
"No man's knowledge here can go beyond his experience :- John Locke",
"It is undesirable to believe a proposition when there is no ground whatever for supposing it true :- Bertrand Russell",
"Even while they teach, men learn :- Seneca the Younger",
"There is only one good, knowledge, and one evil, ignorance :- Socrates",
"This is patently absurd; but whoever wishes to become a philosopher must learn not to be frightened by absurdities :- Bertrand Russell",
"One cannot conceive anything so strange and so implausible that it has not already been said by one philosopher or another :- Rene Descartes",
"Philosophy is a battle against the bewitchment of our intelligence by means of language :- Ludwig Wittgenstein",
"There is only one thing a philosopher can be relied upon to do, and that is to contradict other philosophers :- William James",
"We are what we repeatedly do. Excellence, then, is not an act, but a habit :- Aristotle",
"Only one man ever understood me, and he didn’t understand me :- G.W.F. Hegel",
"The mind is furnished with ideas by experience alone :- John Locke",
"Life must be understood backward. But it must be lived forward :- Soren Kierkegaard",
"Science is what you know. Philosophy is what you don't know :- Bertrand Russell",
"Metaphysics is a dark ocean without shores or lighthouse, strewn with many a philosophic wreck :- Immanuel Kant",
"Philosophy is at once the most sublime and the most trivial of human pursuits :- William James",
"He who is unable to live in society, or who has no need because he is sufficient for himself, must be either a beast or a god :- Aristotle",
"You can discover more about a person in an hour of play than in a year of conversation :- Plato",
"I would never die for my beliefs because I might be wrong :- Bertrand Russell",
"Happiness is the highest good :- Aristotle",
"If men were born free, they would, so long as they remained free, form no conception of good and evil :- Baruch Spinoza",
"The greater the difficulty, the more glory in surmounting it Epicurus",
"Whatever is reasonable is true, and whatever is true is reasonable :- G.W.F. Hegel",
"Morality is not the doctrine of how we may make ourselves happy, but of how we may make ourselves worthy of happiness :- Immanuel Kant",
"Man is condemned to be free :- Jean-Paul Sarte",
"It is one thing to show a man that he is in error, and another to put him in possession of truth :- John Locke",
"I don’t know why we are here, but I’m pretty sure it is not in order to enjoy ourselves :- Ludwig Wittgenstein",
"That man is wisest who, like Socrates, realizes that his wisdom is worthless :- Plato",
"The only thing I know is that I know nothing” :- Socrates",
"The function of prayer is not to influence God, but rather to change the nature of the one who prays :- Soren Kierkegaard",
"Man is born free, but is everywhere in chains :- Jean-Jacques Rousseau",
"If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things :- Rene Descartes",
"Happiness lies in virtuous activity, and perfect happiness lies in the best activity, which is contemplative :- Aristotle",
"I can control my passions and emotions if I can understand their nature :- Spinoza",
"Virtue is nothing else than right reason :- Seneca the Younger",
"Freedom is secured not by the fulfilling of one's desires, but by the removal of desire :- Epictetus",
"In everything, there is a share of everything :- Anaxagoras",
"The brave man is he who overcomes not only his enemies but his pleasures :- Democritus",
"Good and evil, reward and punishment, are the only motives to a rational creature :- John Locke",
"Everything that exists is born for no reason, carries on living through weakness, and dies by accident :- Jean-Paul Sarte"];



function quotify() {
  var r = Math.floor(Math.random() * (quotes.length + 1));
  document.getElementById("quoteHere").innerHTML = quotes[r];
}

function tweetify() {
      var tweetJoke = $("#quoteHere").text();

    window.open('https://twitter.com/intent/tweet?text="' + tweetJoke + '"', '_blank')
}