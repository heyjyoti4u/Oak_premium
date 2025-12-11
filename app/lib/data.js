// app/lib/data.js

export const destinations = [
  {
    id: "manali",
    name: "Manali",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000",
    description: "A sanctuary in the Himalayas. Breathe in the pine-scented air and let the mountains heal you.",
    nearbyPlaces: [
      { name: "Solang Valley", image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=300", dist: "13 km away" },
      { name: "Sissu", image: "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=300", dist: "40 km away" },
      { name: "Naggar", image: "https://images.unsplash.com/photo-1596021688656-35fdc9ed0274?q=80&w=300", dist: "21 km away" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605649487215-47678681491a?q=80&w=300",
      "https://images.unsplash.com/photo-1596395819057-d3715d39a31a?q=80&w=300"
    ],
    // 🔥 ACTIVITY POOL (Isse hum dynamic days banayenge)
    activityPool: {
      "Relaxed": [
        { title: "Arrival & Hot Springs", desc: "Arrive in Manali. Head straight to Vashisht Village. Dip your tired body in the natural sulfur Hot Springs—it's nature's own spa.", image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=600", tip: "Visit early morning for cleaner water." },
        { title: "Old Manali Cafe Hopping", desc: "Cross the bridge to Old Manali. Spend hours reading a book by the Manalsu River in a riverside cafe.", image: "https://images.unsplash.com/photo-1571406859424-4f24c0849209?q=80&w=600", tip: "Try the Trout fish at Drifters' Inn." },
        { title: "Naggar Castle & Art", desc: "Drive to Naggar Castle. It offers the best panoramic views of the valley. Visit the Roerich Art Gallery.", image: "https://images.unsplash.com/photo-1596021688656-35fdc9ed0274?q=80&w=600", tip: "Try the traditional Himachali Thali inside the castle." },
        { title: "Picnic at Van Vihar", desc: "A quiet day amidst Deodar trees. Van Vihar is perfect for a lazy afternoon picnic and boating.", image: "https://images.unsplash.com/photo-1596395819057-d3715d39a31a?q=80&w=600", tip: "Ideal for sunset walks." },
        { title: "Shopping on Mall Road", desc: "End your trip with some souvenir shopping. Buy local woolens and handicrafts.", image: "https://images.unsplash.com/photo-1566802613133-c23cb6e1b782?q=80&w=600", tip: "Bargain respectfully." }
      ],
      "Adventure": [
        { title: "Jogini Falls Trek", desc: "A 3km trek through apple orchards ending at a massive waterfall. The perfect warm-up.", image: "https://images.unsplash.com/photo-1589139855584-63806f35a570?q=80&w=600", tip: "Wear good grip shoes." },
        { title: "Paragliding in Solang", desc: "Fly high above the valley. Paragliding and ATV rides in Solang Valley.", image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=600", tip: "Go in the morning for better wind conditions." },
        { title: "River Rafting in Kullu", desc: "Battle the rapids of the Beas River. An adrenaline-pumping experience.", image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=600", tip: "Carry extra dry clothes." },
        { title: "Atal Tunnel & Sissu", desc: "Drive through the engineering marvel into Lahaul Valley. See the rugged landscapes.", image: "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=600", tip: "Start early to avoid traffic." },
        { title: "Sethan Igloo Village", desc: "If it's winter, stay in an Igloo in Sethan. A unique snow experience.", image: "https://images.unsplash.com/photo-1518182170546-07fb6ce59393?q=80&w=600", tip: "Book months in advance." }
      ],
      "Spiritual": [
        { title: "Hidimba Devi Temple", desc: "Ancient wooden temple amidst calm cedar forests. Meditate in the peaceful surroundings.", image: "https://images.unsplash.com/photo-1605649487215-47678681491a?q=80&w=600", tip: "Visit at sunrise for silence." },
        { title: "Manu Temple", desc: "Dedicated to Sage Manu. Located in Old Manali, it offers spiritual vibes and great views.", image: "https://images.unsplash.com/photo-1596894454942-70b991475753?q=80&w=600", tip: "Walk up the hill for a mini-trek." },
        { title: "Tibetan Monasteries", desc: "Visit the Gadhan Thekchhokling Gompa. Spin the prayer wheels and find inner peace.", image: "https://images.unsplash.com/photo-1585061652498-6395e26b77c3?q=80&w=600", tip: "Buy Tibetan incense sticks." },
        { title: "Manikaran Sahib", desc: "A day trip to the holy Gurudwara with natural hot springs. A place of deep faith.", image: "https://images.unsplash.com/photo-1603521665476-c5675c94294d?q=80&w=600", tip: "Enjoy the Langar (community meal)." },
        { title: "Vashisht Temple", desc: "Ancient stone temple dedicated to Sage Vashisht. Take a holy dip.", image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=600", tip: "Respect local customs." }
      ]
    }
  },
  {
    id: "puri",
    name: "Puri",
    image: "https://images.unsplash.com/photo-1624699569650-3b24172a1883?q=80&w=1000",
    description: "Where spirituality meets the sea.",
    nearbyPlaces: [], 
    gallery: [],
    activityPool: {
        "Relaxed": [{ title: "Golden Beach", desc: "Relax at the Blue Flag Golden beach.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600", tip: "Cleanest beach in India." }],
        "Spiritual": [{ title: "Jagannath Temple", desc: "Darshan of the Lord of the Universe.", image: "https://images.unsplash.com/photo-1603521665476-c5675c94294d?q=80&w=600", tip: "Leave phones at hotel." }]
        // Add more items to make it work fully
    }
  }
  // ... other destinations
];