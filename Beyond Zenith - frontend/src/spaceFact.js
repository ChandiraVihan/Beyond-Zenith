// const SPACE_KEYWORDS = [
//   "space",
//   "planet",
//   "star",
//   "galaxy",
//   "astronomy",
//   "cosmic",
//   "orbit",
//   "asteroid",
//   "nebula",
//   "black hole",
//   "universe",
//   "moon",
//   "solar",
// ];

// export async function fetchSpaceText(maxRetries = 5) {
//   for (let i = 0; i < maxRetries; i++) {
//     const res = await fetch(
//       "https://en.wikipedia.org/api/rest_v1/page/random/summary"
//     );

//     if (!res.ok) continue;

//     const data = await res.json();
//     if (!data?.extract) continue;

//     const text = `${data.title} ${data.extract}`.toLowerCase();

//     if (SPACE_KEYWORDS.some(k => text.includes(k))) {
//       return data.extract;
//     }
//   }

//   throw new Error("No space-related article found");
// }

const SpaceFacts = [
  "A day on Venus is longer than a year on Venus.",
  "There are more stars in the observable universe than grains of sand on Earth.",
  "Neutron stars can spin over 600 times per second.",
  "The Moon is drifting away from Earth by about 3.8 cm per year.",
  "Jupiter’s Great Red Spot is a storm larger than Earth.",
  "Space is completely silent because there is no atmosphere to transmit sound waves.",
"Venus is the hottest planet in our solar system, with a surface temperature of over 450°C (842°F).",
"A day on Venus is longer than a year on Venus; it takes 243 Earth days to rotate once but only 225 days to orbit the Sun.",
"One million Earths could fit inside the Sun.",
"There are more trees on Earth than there are stars in the Milky Way galaxy.",
"The Moon was once a piece of the Earth that broke off after a collision with a Mars-sized object called Theia.",
"Saturn’s rings are 90% water ice.",
"Jupiter is a 'failed star' because it is made of hydrogen and helium but didn't have enough mass to trigger nuclear fusion.",
"If two pieces of the same type of metal touch in space, they will permanently bond due to cold welding.",
"Mars is home to Olympus Mons, the tallest mountain in the solar system—it's three times the height of Mount Everest.",
"Uranus appears blue-green because methane in its atmosphere filters out red light.",
"Neptune’s winds are the fastest in the solar system, reaching speeds of 1,600 mph.",
"Saturn is the only planet in our solar system that is less dense than water; it would float in a giant bathtub.",
"The Sun makes up 99.86% of the total mass of our entire solar system.",
"Mercury has no atmosphere, meaning its sky is always black even during the day.",
"Jupiter’s Great Red Spot is a storm that has been raging for at least 350 years.",
"Pluto is smaller than the United States in terms of surface area.",
"There is a planet called 55 Cancri e that is believed to be made largely of diamond.",
"Earth is the only planet not named after a Greek or Roman god.",
"Enceladus, one of Saturn’s moons, reflects 90% of the sunlight that hits it because it is covered in clean ice.",
"On Mars, sunsets appear blue to the human eye.",
"The asteroid belt between Mars and Jupiter contains millions of asteroids, but they are so far apart you could fly through it safely.",
"Venus rotates clockwise, while most other planets rotate counter-clockwise.",
"Mercury is the second hottest planet despite being closest to the sun; it lacks an atmosphere to trap heat.",
"Jupiter has 95 officially recognized moons.",
"Uranus is the only planet that rotates on its side, likely due to a massive collision in its past.",
"The Moon is moving away from Earth at a rate of about 3.8 cm (1.5 inches) per year.",
"Neptune has a 'Great Dark Spot' similar to Jupiter’s Red Spot, but it disappears and reappears over decades.",
"Saturn’s moon Titan has liquid lakes, but they are made of methane and ethane, not water.",
"There is a massive cloud of alcohol in the constellation Aquila that contains enough ethanol to make 400 trillion trillion pints of beer.",
"The Milky Way galaxy is approximately 100,000 light-years across.",
"There are an estimated 2 trillion galaxies in the observable universe.",
"Neutron stars are so dense that a single teaspoon of their material would weigh 6 billion tons.",
"The closest star system to us is Alpha Centauri, which is 4.3 light-years away.",
"Our Sun is a Yellow Dwarf star.",
"When you look at the stars, you are actually looking back in time because of how long light takes to reach us.",
"A 'light-year' is a measure of distance, not time (about 5.88 trillion miles).",
"The Milky Way is currently on a collision course with the Andromeda Galaxy.",
"Most stars in the universe are Red Dwarfs, which are smaller and cooler than our Sun.",
"Blue stars are the hottest, while red stars are the coolest.",
"The largest known star, UY Scuti, is 1,700 times wider than the Sun.",
"A Supernova is the explosion of a star and is the brightest event in the universe.",
"The Milky Way is a barred spiral galaxy.",
"Black holes aren't actually 'holes'—they are spheres of incredibly dense matter with gravity so strong light cannot escape.",
"At the center of almost every large galaxy is a supermassive black hole.",
"The 'Event Horizon' is the 'point of no return' around a black hole.",
"If you fell into a black hole, you would experience 'spaghettification,' where gravity stretches your body into a thin strand.",
"Quasars are the brightest objects in the universe; they are powered by black holes eating matter.",
"The universe is approximately 13.8 billion years old.",
"There is no 'center' of the universe; it is expanding in all directions simultaneously.",
"The International Space Station (ISS) travels at 17,500 miles per hour.",
"The ISS circles the Earth once every 90 minutes.",
"Astronauts on the ISS see 16 sunrises and sunsets every day.",
"You cannot cry in space because your tears don't fall; they just form a liquid ball on your eye.",
"Footprints left by Apollo astronauts on the Moon will stay there for at least 100 million years because there is no wind.",
"Astronauts grow up to 2 inches taller in space because their spines decompress without gravity.",
"The Voyager 1 spacecraft is the farthest human-made object from Earth.",
"Space suits cost about $12 million each.",
"NASA’s Viking landers were the first to successfully land on Mars in 1976.",
"The word 'Astronaut' comes from Greek words meaning 'Star Sailor'.",
"In space, your skin eventually peels off the bottom of your feet because you aren't walking on them.",
"Most astronauts become 'space sick' for the first few days because their inner ear gets confused by the lack of gravity.",
"Because of time dilation, clocks on the ISS run slightly slower than clocks on Earth.",
"Saturn’s moon Phoebe was the first moon to be photographed by a spacecraft (Voyager 2).",
"The 'Golden Record' on the Voyager probes contains sounds and images of Earth for any aliens who might find it.",
"NASA once used 'vomit comets' (airplanes flying in arcs) to train astronauts for weightlessness.",
"The first living creature in space was a dog named Laika.",
"The first person in space was Yuri Gagarin in 1961.",
"The first woman in space was Valentina Tereshkova.",
"Saturn’s rings are named alphabetically in the order they were discovered (A, B, C, etc.).",
"95% of the universe is made of Dark Matter and Dark Energy, which we cannot see or measure directly.",
"Space starts at the 'Kármán line,' which is 100 kilometers (62 miles) above sea level.",
"There is a massive water reservoir in space that holds 140 trillion times the amount of water in Earth's oceans.",
"The 'Great Attractor' is a mysterious gravitational anomaly pulling our galaxy toward it.",
"Light from the Sun takes 8 minutes and 20 seconds to reach Earth.",
"If you could drive a car to the Sun at 60 mph, it would take 177 years.",
"Space smells like seared steak or hot metal, according to returning astronauts.",
"Gamma-ray bursts can release more energy in 10 seconds than our Sun will in its entire 10-billion-year lifetime.",
"The universe is physically 'flat' according to cosmic microwave background radiation measurements.",
"Saturn’s moon Mimas looks exactly like the Death Star from Star Wars.",
"Mercury is shrinking as its iron core cools down.",
"A 'pulsar' is a highly magnetized, rotating neutron star that emits a beam of electromagnetic radiation.",
"The Boomerang Nebula is the coldest known place in the universe, with a temperature of -272°C.",
"There are 'rogue planets' that don't orbit any star and just float through the dark of space.",
"The Sun’s atmosphere (the corona) is actually hotter than its surface.",
"Jupiter has a 'hidden' ring system that is very faint and made of dust.",
"Earth's magnetic field is what protects us from deadly solar radiation.",
"Halley’s Comet will next be visible from Earth in 2061.",
"The Oort Cloud is a giant shell of icy objects that surrounds our solar system.",
"A day on the Moon lasts about 29 Earth days.",
"The Moon has 'moonquakes' caused by the Earth’s gravitational pull.",
"The 'Pillars of Creation' are massive clouds of gas and dust where new stars are being born.",
"Venus is the only planet where the Sun rises in the West and sets in the East.",
"Gravity on Mars is only 38% of the gravity on Earth.",
"The ISS is roughly the size of a football field.",
"White Dwarfs are the remaining cores of dead stars that are about the size of Earth but the mass of the Sun.",
"If a star passes too close to a black hole, it can be torn apart in a process called a 'Tidal Disruption Event'.",
"The most common element in the universe is Hydrogen.",
"Helium is the second most abundant element, but it was first discovered on the Sun before it was found on Earth.",
"Because the universe is expanding, galaxies are moving away from us faster and faster every second."
];

export default SpaceFacts;
