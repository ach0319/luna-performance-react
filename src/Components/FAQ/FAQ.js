import React from "react";
import "../FAQ/FAQ.css";
import image3 from "../Images/image3.png";

function FAQ() {
  return (
    <div
      className="faq-container"
      style={{
        backgroundImage: `url(${image3})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center 150px",
        backgroundColor: "#0D0106",
      }}
    >
      <div className="FAQ">
        <h1>Frequently Asked Questions (FAQ)</h1>

        <h3>How long do the powder coating finishes last?</h3>

        <p>
          The longevity of the product will highly depend on several factors.
          These factors include the quality of preparation, type of powder
          coating used, and the environment in which the product is exposed.
          Powder coating finishes can last up to 20 years, but due to the
          consistent use, exposure to UV light, and outdoor environment may
          break it down faster. Different coatings also have varying lifespans.
          For instance, coatings that have fluoropolymers and urethanes can last
          longer. They are designed to withstand extreme conditions and are
          better suited for outdoor products.
        </p>

        <h3>Is mounting tires a little more tedious with Powder Coating?</h3>

        <p>
          Yes, tire mounting machines can easily scratch and chip due to the
          nature of the machine. I have partners that I work with that have and
          utilize special equipment to mount tires if needed. Feel free to
          contact me regarding their information if you'd like a referral.
        </p>

        <h3>
          How do you install and maintain something that is powder coated?
        </h3>

        <p>
          During installations, the powder coating should be protected from
          damage due to abrasion and materials of construction such as mortar
          and brick cleaning chemicals. Once installed, maintaining the initial
          appearance of a powder coating is a simple matter. The soot and grime
          which builds up on surfaces from time to time contains moisture and
          salts which will adversely affect the powder coating and must be
          removed. Powder coatings should be washed down regularly (at least
          once each 6 months in less severe applications and more often in
          marine and industrial environments). The coating should be washed down
          with soapy water -- use a neutral detergent -- and rinsed off with
          clean water. When powder coated items are installed without damage to
          the powder coating and they are maintained regularly, they should be
          relatively permanent. The correctly applied coating, although not
          metallurgically bonded to the metal will not crack, chip or peel as
          with conventional paint films.
        </p>

        <h3>What’s the average turnaround time?</h3>

        <p>
          Normally all projects can be finished within a weeks time depending on
          when it is dropped off and how much sandblasting is necessary to prep
          your product for coating.
        </p>

        <h3>Do I offer warranties on my work?</h3>

        <p>
          If there is anything that is defective due to my work then yes, I will
          redo the work at my own cost. If there is damage due to normal wear
          and tear I will allow for a discount in the matters of the cost of
          labor, customers would just need to cover the cost of sandblasting and
          replacement powder. This only applies for the first year after
          production completion date. Claims will need to be emailed to me
          (found under "contact me") and will be responded to within 48 hours.
        </p>

        <h3>What are the key differences between powder coating and paint?</h3>

        <p>
          The number one difference between powder coating and your traditional
          liquid paint is that powder coating doesn’t need a solvent to keep the
          filler and binder parts in liquid form. Powder coating is cured under
          heat and applied electrostatically. This lets the powder flow and
          forms a kind of skin on the product it’s being applied to. Powder
          coating can either come as a thermoplastic or thermoset polymer and is
          used to create a hard finish that’s considered tougher than
          conventional paint. Powder coating also provides many different
          advantages that conventional paint can’t quite deliver to metal. These
          advantages include: Powder coatings create a thicker coat without
          sagging or running like conventional liquid coating does. When a
          conventional liquid coating is used, there are appearance differences
          between horizontally coated and vertically coated services. Products
          and items that are given a powder coating have few differences in
          appearance even if they were coated differently. You can recycle
          powder coating overspray, which means you can make use of the entire
          coating without wasting the powder. Unlike a conventional liquid
          coating, powder coatings emit near zero volatile organic compounds, or
          VOCs.
        </p>

        <h3>Is there any way to color match exactly what I’m looking for? </h3>

        <p>
          In a general sense yes, colors can be color matched. However, it can
          become pretty costly. I do have color swatches that help me find a
          color as close to 90% of a match of what you're looking for.{" "}
        </p>

        <h3>Do you have a set list of prices?</h3>

        <p>
          There is a set list of prices, please see the Price List . However prices
          can be adjusted and changed by the owners discretion depending on
          extremity of prepping the is involved for your product to be ready for
          coating. Feel free to contact me using the contact page to submit a
          request for a quote.
        </p>

        <h3>What products can be powder coated?</h3>
        <p>
          The fine powder used in this painting method is electrostatically
          charged, which is what attracts it to metal surfaces prior to the
          curing process. If a metal or material can’t hold an electrostatic
          charge, the powder won’t be able to affix itself to the surface, and
          it won’t be able to be powder coated. Additionally, a metal will need
          to be able
        </p>
      </div>
    </div>
  );
}

export default FAQ;
