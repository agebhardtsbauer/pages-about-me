import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/landing"
              element={<Landing />}
            />
            {/* <Route
              path="/about"
              element={<AboutPage />}
            /> */}
            {/* additional routes here */}
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;

{
  /* <h1>Hey It's Alan</h1>
        <p>
          Once upon a time, in the calm, crystal blue waters of the Caribbean,
          there lived a very curious, adventurous cat named Mariner. Mariner was
          no ordinary cat; he wasn't content lounging around in cozy homes or
          chasing mice in grassy backyards. Instead, he found his joy living
          aboard a strikingly elegant, 30-foot sailboat named The Whisker, his
          eyes always glittering with the thrill of a seafaring life. Every day,
          Mariner would stand at the stern of his boat, watching the sun emerge
          from behind the farthest edge of the ocean, splashing the sky with
          hues of orange and pink. He delighted in feeling the cool morning
          breeze tousle his sleek fur and ripple through his twitching whiskers.
          He would sit, perched on his paws, staring keenly into the endless
          expanse of the sea, as if it were a giant, mysterious playground just
          for him. On more lively days, he would glide deftly around the ship,
          chasing and leaping after seagulls that dared to swoop too close.
          Other times, he’d lay sprawled on the sun-warmed deck, eyeing the
          fishing nets with keen interest as they brought in thrashing,
          glittering fish from the gargantuan, frothy waters beneath.
          Occasionally, he would show off his quick paw skills, swiping a
          slippery fish or two from the nets for his dinner. Mariner the cat was
          fearless. Even during the most violent storms, when the boat would
          creak and moan under the weight of tumultuous waves, Mariner would
          stand determined at the helm. His verdant eyes, fierce and unwavering,
          would reflect the mighty dance of the storm, a sign of his unyielding
          spirit. He was a true sailor, embracing the unpredictability of the
          sea with bold courage and innate curiosity. As the nights fell,
          Mariner would sit on the bow, eyes locked onto the twinkling starlit
          sky above. The pitch-black ocean around him would mirror the night
          sky, creating a sense of endlessness that was both exhilarating and
          humbling. Mariner might have been just a small cat, but aboard his
          ship, sailing across the vast, unpredictable waters, he felt like the
          king of a boundless world. The boat, the sea waves, the morning sun,
          the darting fish, the raging storms, the tranquil nights--all these
          were part of his grand adventure, a testament to his unconventional
          cat life on a boat. Even today, as The Whisker sails under the
          changing weather, guided by the constellations, you might get a
          glimpse of a small, valiant figure standing majestically against the
          horizon, tail high in the air. Mariner, the voyaging cat, forever
          seeking adventure on his magnificent boat amidst the open, untamed
          sea.
        </p> */
}
