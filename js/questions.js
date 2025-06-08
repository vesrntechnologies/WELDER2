let questions = [
  {
    numb: 1,
    question: "What is the effect shown in figure?",
    immg: "img1",
    answer: "Surface tension",
    options: ["Gravity force", "Gas expansion", "Surface tension", "Electro magnetic"]
  },
  {
    numb: 2,
    question: "What is the name of equipment shown in the figure?",
    immg: "img2",
    answer: "Wire wool",
    options: ["Wire brush", "Wire wool", "Wire roll", "Wire type"]
  },
  {
    numb: 3,
    question: "What is the name of the cleaning shown in figure?",
    immg: "img3",
    answer: "Chemical",
    options: ["Grinding", "Brushing", "Chemical", "Mechanical"]
  },
  {
    numb: 4,
    question: "What is the angle of cutting nozzle with the body?",
    immg: "img4",
    answer: "90o",
    options: ["45o", "60o", "90o", "120o"]
  },
  {
    numb: 5,
    question: "What is the melting temperature of soft soldering?",
    immg: "img5",
    answer: "Below 350oC",
    options: ["Below 350oC", "Below 220oC", "Above 420oC", "Above 500oC"]
  },
  {
    numb: 6,
    question: "What is the first run deposit in the root of joint called?",
    immg: "img6",
    answer: "Root run",
    options: ["Root run", "Root face", "Sealing run", "Root penetration"]
  },
  {
    numb: 7,
    question: "What is called as current?",
    immg: "img7",
    answer: "Electrons motion",
    options: ["Protons motion", "Electrons motion", "Neutrons motion", "Molecules motion"]
  },
  {
    numb: 8,
    question: "What is the use of ammeter?",
    immg: "img8",
    answer: "To measure current",
    options: ["To measure current", "To measure voltage", "To measure pressure", "To measure resistance"]
  },
  {
    numb: 9,
    question: "Which wire brush is used to clean ferrous metals?",
    immg: "img9",
    answer: "Carbon steel",
    options: ["Mild steel", "Stainless steel", "Carbon steel", "Low carbon steel"]
  },
  {
    numb: 10,
    question: "Which wire brush is used to clean Non-ferrous metals?",
    immg: "img10",
    answer: "Stainless steel",
    options: ["Mild steel", "Carbon steel", "Stainless steel", "High carbon steel"]
  },
  {
    numb: 11,
    question: "Which type of cleaning uses hydrochloric acid?",
    immg: "img11",
    answer: "Chemical cleaning",
    options: ["Sand blasting", "Chemical cleaning", "Rubbing with emery", "Mechanical cleaning"]
  },
  {
    numb: 12,
    question: "Why surface cleaning is important?",
    immg: "img12",
    answer: "Removes oil and paint",
    options: ["Removes oil and paint", "Removes metal", "Removes weld bead", "Removes weld defect"]
  },
  {
    numb: 13,
    question: "How many types of oxy-acetylene flames are there?",
    immg: "img13",
    answer: "3",
    options: ["2", "3", "4", "5"]
  },
  {
    numb: 14,
    question: "Which is the easist welding position?",
    immg: "img14",
    answer: "Flat",
    options: ["Flat", "Vertical", "Over head", "Horizontal"]
  },
  {
    numb: 15,
    question: "What is the symbol of welding shown in the figure?",
    immg: "img15",
    answer: "Backing run / weld",
    options: ["Spot weld", "Fillet weld", "Single J butt", "Backing run / weld"]
  },
  {
    numb: 16,
    question: "What is the represent vertical position of groove welding?",
    immg: "img16",
    answer: "4G",
    options: ["1G", "2G", "4G", "6G"]
  },
  {
    numb: 17,
    question: "What is the angle of electrode in flat position welding?",
    immg: "img17",
    answer: "70o to 80o",
    options: ["50o to 70o", "60o to 70o", "70o to 80o", "80o to 90o"]
  },
  {
    numb: 18,
    question: "What procedure is followed in welding pipe in 5 G position?",
    immg: "img18",
    answer: "Pipe fixed,weld vertically either or down will method",
    options: [
      "Rotate pipe and weld vertically",
      "Pipe fixed welded horizontally",
      "Pipe fixed and inclined at 45o",
      "Pipe fixed,weld vertically either or down will method"
    ]
  },
  {
    numb: 19,
    question: "Which polarity is used to weld aluminium by GTAW?",
    immg: "img19",
    answer: "Reverse polarity",
    options: ["Rectifier set", "AC Transformer", "Reverse polarity", "Straight polarity"]
  },
  {
    numb: 20,
    question: "Which type of polarity is used in bare wire electrode?",
    immg: "img20",
    answer: "Straight polarity",
    options: ["Straight polarity", "Reverse polarity", "AC Transformer", "Rectifier set"]
  },
  {
    numb: 21,
    question: "Which type of arc length produces deep penetration weld?",
    immg: "img21",
    answer: "Short arc length",
    options: ["Long arc length", "Short arc length", "Medium arc length", "Too long arc length"]
  },
  {
    numb: 22,
    question: "Which type of arc produces humming sound?",
    immg: "img22",
    answer: "Long arc length",
    options: ["Long arc length", "Short arc length", "Normal arc length", "Too long arc length"]
  },
  {
    numb: 23,
    question: "Which arc length produces popping sound?",
    immg: "img23",
    answer: "Short arc length",
    options: ["Long arc length", "Short arc length", "Normal arc length", "Too long arc length"]
  },
  {
    numb: 24,
    question: "What is the purpose of wrapping the weld cable around the job in welding?",
    immg: "img24",
    answer: "To control arc blow",
    options: [
      "To control arc blow",
      "To control arc speed",
      "To control arc length",
      "To control distortion"
    ]
  },
  {
    numb: 25,
    question: "What is the defect shown in the figure?",
    immg: "img25",
    answer: "Arc blow",
    options: ["Arc blow", "Over lap", "Under cut", "Distortion"]
  },
  {
    numb: 26,
    question: "Which system of welding is free from “Arc blow”?",
    immg: "img26",
    answer: "AC welding",
    options: ["AC welding", "DC Reverse polarity", "DC straight polarity", "DC welding"]
  },
  {
    numb: 27,
    question: "What is the type of distortion shown in the figure?",
    immg: "img27",
    answer: "Longitudinal distortion",
    options: [
      "Wide distortion",
      "Angular distortion",
      "Transverse distortion",
      "Longitudinal distortion"
    ]
  },
  {
    numb: 28,
    question: "What is the name of small metal particles which are thrown out of the arc during welding?",
    immg: "img28",
    answer: "Spatters",
    options: ["Slag", "Spatters", "Stub end", "Weld metal"]
  },
  {
    numb: 29,
    question: "Which one of the defect is caused by low current in arc welding?",
    immg: "img29",
    answer: "Lack of fusion",
    options: ["Porosity", "Under cut", "Lack of fusion", "Excessive penetration"]
  },
  {
    numb: 30,
    question: "What is the cause of hair line separation in the bead in arc welding?",
    immg: "img30",
    answer: "Fast cooling",
    options: ["Fast cooling", "Slow cooling", "Long arc length", "Wrong selection of electrode"]
  },
  {
    numb: 31,
    question: "What are the gas flame combination used for welding ferrous and non ferrous alloys?",
    immg: "img31",
    answer: "Acetylene + Oxygen",
    options: ["LPG + Air", "Acetylene + Air", "Acetylene + Oxygen", "Hydrogen + Oxygen"]
  },
  {
    numb: 32,
    question: "Which is the hottest point in a oxyacetylene flame?",
    immg: "img32",
    answer: "Inner cone",
    options: ["Outer cone", "Outer envelope", "Inner envelope", "Inner cone"]
  },
  {
    numb: 33,
    question: "Which is used to check the leakage of acetylene regulator connections?",
    immg: "img33",
    answer: "Soap water",
    options: ["Salt water", "Plain water", "Soap water", "Chemical water"]
  },
  {
    numb: 34,
    question: "What is the use of oxidising flame?",
    immg: "img34",
    answer: "Suitable for brass welding",
    options: [
      "Suitable for cast iron welding",
      "Suitable for brass welding",
      "Suitable for mild steel welding",
      "Suitable for satellite, pipe welding"
    ]
  },
  {
    numb: 35,
    question: "Which Material is used in Manufacturing gas cylinder?",
    immg: "img35",
    answer: "Solid Drawn steel",
    options: ["Forged steel", "Nickel steel", "Stainless steel", "Solid Drawn steel"]
  },
  {
    numb: 36,
    question: "What is the special method for safe storage of acetylene gas cylinder?",
    immg: "img36",
    answer: "Stored as dissolved gas in liquid acetone",
    options: [
      "Stored in gaseous form",
      "Stored in the solid form",
      "Stored in semi-liquid form",
      "Stored as dissolved gas in liquid acetone"
    ]
  },
  {
    numb: 37,
    question: "Which method is used to control back fire while welding?",
    immg: "img37",
    answer: "Close oxygen control valve",
    options: [
      "Close oxygen control valve",
      "Close acetylene control valve",
      "First close the oxygen cylinder valve",
      "First close the acetylene cylinder valve"
    ]
  },
  {
    numb: 38,
    question: "What is the angle of filler rod, by rightward welding?",
    immg: "img38",
    answer: "30o - 40o",
    options: ["30o - 40o", "40o - 50o", "50o - 60o", "60o - 70o"]
  },
  {
    numb: 39,
    question: "Which metal contains iron as a major content?",
    immg: "img39",
    answer: "Ferrous metal",
    options: ["Brass metal", "Bronze metal", "Zinc", "Ferrous metal"]
  },
  {
    numb: 40,
    question: "Which property of metal has its power of returning to its original shape after the applied force is released?",
    immg: "img40",
    answer: "Elasticity",
    options: ["Malleability", "Tenacity", "Elasticity", "Plasticity"]
  },
  {
    numb: 41,
    question: "Which property of a metal possessed by it melts when heat is applied?",
    immg: "img41",
    answer: "Fusibility",
    options: ["Conductivity", "Malleability", "Fusibility", "Tenacity"]
  },
  {
    numb: 42,
    question: "Which cast iron cannot be welded?",
    immg: "img42",
    answer: "White cast iron",
    options: ["Grey cast iron", "White cast iron", "Malleable cast iron", "Nodular cast iron"]
  },
  {
    numb: 43,
    question: "What is termed as the quantity of matter contained in a body?",
    immg: "img43",
    answer: "Mass",
    options: ["Density", "Volume", "Mass", "Specific gravity"]
  },
  {
    numb: 44,
    question: "What is called mass per unit volume of a substances?",
    immg: "img44",
    answer: "Density",
    options: ["Mass", "Weight", "Density", "Volume"]
  },
  {
    numb: 45,
    question: "Identify the conventional symbol of material?",
    immg: "img45",
    answer: "Lead",
    options: ["Lead", "Steel", "Glass", "Porcelain"]
  },
  {
    numb: 46,
    question: "Identify the conventional symbol of material?",
    immg: "img46",
    answer: "Glass",
    options: ["Concrete", "Steel", "Wood", "Glass"]
  },
  {
    numb: 47,
    question: "Identify the conventional symbol of material?",
    immg: "img47",
    answer: "Steel",
    options: ["Steel", "Wood", "Glass", "Concrete"]
  },
  {
    numb: 48,
    question: "What is the trimmed size of A4 sheet?",
    immg: "img48",
    answer: "210 x 297",
    options: ["841 x 1189", "594 x 841", "210 x 297", "148 x 210"]
  },
  {
    numb: 49,
    question: "Which drawing dimension is correct as per IS standard?",
    immg: "img49",
    answer: "A1",  
    options: ["A1", "A2", "A3", "A4"]
  },
  {
    numb: 50,
    question: "Identify the name of prism?",
    immg: "img50",
    answer: "Square prism",
    options: ["Square prism", "Pentagonal prism", "Triangular prism", "Hexagonal prism"]
  }
];

