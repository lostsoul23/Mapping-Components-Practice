import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";

// console.log(emojipedia);

// Break the problem into smaller sub-problems:
// 1. Create Entry comp. Done
// 2. Create props to replace hardcoded data. Done
// 3. Import the emojipedia const. Done
// 4.Map through the emojipedia array and render Entry comps. Done

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}

        {/* <Entry
          emoji="💪"
          name="Tense biceps"
          description="“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
        />
        <Entry />
        <Entry /> */}
      </dl>
    </div>
  );
}

export default App;
