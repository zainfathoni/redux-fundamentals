// Import React
import React from "react";
import CodeSlide from "spectacle-code-slide";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  ComponentPlayground,
  Link,
  Appear,
  MarkdownSlides,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  pattern: require("../assets/react-pattern.png"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#764ABC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
         {
          MarkdownSlides`
#### Create Multiple Slides in Markdown
All the same tags and elements supported in <Markdown /> are supported in MarkdownSlides.
---
Slides are separated with **three dashes** and can be used _anywhere_ in the deck. The markdown can either be:
* A Tagged Template Literal
* Imported Markdown from another file
          `
        }
        <Slide transition={["slide"]} width="100%" >
          <Image width="100%" src={images.pattern}/>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.pattern.replace("/", "")} bgDarken={0.2}>
          <Appear fid="1">
            <Heading size={6} caps fit textColor="primary">Props Down</Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={6} caps fit textColor="primary">Action Up</Heading>
          </Appear>
          <Appear fid="3">
            <Text textColor="primary" bold>
              One of <Link href="https://hackernoon.com/10-react-mini-patterns-c1da92f068c5">10 React Mini Patterns</Link>
            </Text>
          </Appear>
        </Slide>
        <CodeSlide
          textSize={18}
          transition={[]}
          lang="jsx"
          code={require("raw-loader!../assets/react-pattern.code")}
          ranges={[
            { loc: [0, 148], title: "Real World Example" },
            { loc: [0, 16], note: "Received Props" },
            { loc: [130, 147], note: "PropTypes Definition" },
            { loc: [105, 121], note: "Passing Down Props" },
            { loc: [76, 93], note: "Passing Down Props (Again)" }
          ]}
        />
        <CodeSlide
          textSize={25}
          transition={[]}
          lang="jsx"
          code={require("raw-loader!../assets/reducer.example")}
          ranges={[
            { loc: [0, 7], title: "Reducer" },
            { loc: [0, 1], note: "Accepts State & Action" },
            { loc: [1, 5], note: "Action Switch" },
            { loc: [5, 6], note: "Returns State" }
          ]}
        />
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={6} textColor="tertiary" caps>Reducer</Heading>
          <CodePane
            textSize={18}
            lang="jsx"
            source={require("raw-loader!../assets/reducer.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Link href="https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367">
            <Text>
              You might not need Redux
          </Text>
          </Link>
        </Slide>
        <Slide align="center center">
          <ComponentPlayground
            code={require("raw-loader!../assets/code.example")}
          />
        </Slide>
      </Deck>
    );
  }
}
