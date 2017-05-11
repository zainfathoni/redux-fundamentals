// Import React
import React from "react";
import CodeSlide from "spectacle-code-slide";
import Interactive from "../assets/interactive";

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
  Layout,
  Fit,
  Fill,
  Text,
  S,
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
  redux: require("../assets/redux-logo.png"),
  react: require("../assets/react-logo.svg"),
  bukalapak: require("../assets/bukalapak-logo.png"),
  mentosCoke: require("../assets/mentos-coke.gif")
};

preloader(images);

const theme = createTheme({
  primary: "#6FE7DD",
  secondary: "#3490DE",
  tertiary: "#6639A6",
  quartenary: "#521262",
  redux: "#8800BE",
  react: "#00D8FF"
}, {
  primary: "Titillium Web",
  secondary: "Source Sans Pro"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={600} theme={theme}>
        {/* TITLE */}
        <Slide transition={["spin"]} bgColor="white">
          <Image src={images.redux} width="20%"/>
          <Heading fit lineHeight={1} textFont="primary" textColor="redux" margin="0 0 100px 0">
            Redux Fundamentals
          </Heading>
          <Text textSize="24px" textColor="quartenary" textFont="secondary" bold>
            by
          </Text>
          <Text textSize="42px" textColor="quartenary" textFont="secondary" bold>
            Zain Fathoni
          </Text>
          <Text textSize="30px" textColor="tertiary" textFont="primary" bold margin="20px 0 10px 0">
            Software Engineer at
          </Text>
          <Image src={images.bukalapak} width="25%"/>
        </Slide>
        {/* OUTLINE */}
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="tertiary" caps>Outline</Heading>
          <List>
            <ListItem>Why?</ListItem>
            <ListItem>Three Principles of Redux</ListItem>
            <ListItem>Actions</ListItem>
            <ListItem>Reducers</ListItem>
            <ListItem>Store</ListItem>
            <ListItem>Example</ListItem>
            <ListItem>Behind The Scene</ListItem>
            <ListItem>What's Next?</ListItem>
          </List>
        </Slide>
        {/* WHY? */}
        <Slide transition={["spin"]} width="100%" >
          <Heading size={2} textColor="quartenary" margin="0 0 50px 0" caps>Why?</Heading>
          <Layout>
            <Fill>
              <Appear fid="1">
                <Heading caps fit textColor="tertiary">Mutation +</Heading>
              </Appear>
              <Appear fid="2">
                <Heading caps fit textColor="tertiary" margin="8px 0">Asynchronicity</Heading>
              </Appear>
            </Fill>
            <Fill>
              <Appear fid="3">
                <Heading size={4} caps textColor="tertiary" margin="13px 20px">Mentos</Heading>
              </Appear>
              <Appear fid="4">
                <Heading size={4} caps textColor="tertiary" margin="8px 20px">+ Coke</Heading>
              </Appear>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Appear fid="1">
                <Heading caps textColor="tertiary" margin="25px 0">=</Heading>
              </Appear>
            </Fill>
            <Fill>
              <Appear fid="2">
                <Image src={images.mentosCoke}/>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} width="100%" bgColor="white" >
          <Heading size={1} textColor="react" margin="0 0 50px 0" caps>Solution</Heading>
          <Appear fid="1">
            <div>
              <Image src={images.react} width="25%"/>
              <Heading size={1} caps textColor="react">React</Heading>
            </div>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.pattern.replace("/", "")} bgDarken={0.05}>
          <Heading size={1} textColor="secondary" margin="0 0 50px 0">But ...</Heading>
          <Appear fid="1">
            <Heading size={6} caps fit textColor="primary">Props Down</Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={6} caps fit textColor="primary">Actions Up</Heading>
          </Appear>
          <Appear fid="3">
            <Text textColor="primary">
              One of
              <Link href="https://hackernoon.com/10-react-mini-patterns-c1da92f068c5" target="_blank">
                <Text textColor="primary" bold>
                  <S type="underline">10 React Mini Patterns</S>
                </Text>
              </Link>
            </Text>
          </Appear>
        </Slide>
        {/* REACT PATTERN */}
        <CodeSlide
          textSize="18"
          transition={["fade"]}
          lang="jsx"
          code={require("raw-loader!../assets/react-pattern.code")}
          ranges={[
            { loc: [0, 4], title: "Real World Example", note: "Case Study: Intermediate Component" },
            { loc: [6, 16], title: "Received Props", note: "It takes (many) Props from Parent Component" },
            { loc: [130, 147], title: "PropTypes Definition", note: "Even one of those Props contains more (many) hidden Props" },
            { loc: [105, 121], title: "Passing Down Props", note: "Some of the hidden Props are destructured before being passed to the Children Components" },
            { loc: [76, 93], title: "Passing Down Props (Again)", note: "More Children Components, more passing down Props... :(" }
          ]}
        />
        <Slide transition={["slide"]} width="100%" bgColor="white" >
          <Heading size={1} textColor="quartenary" margin="0 0 50px 0" caps>Solution</Heading>
          <Layout>
            <Fill>
              <Appear fid="1">
                <div>
                  <Image src={images.react} width="25%"/>
                  <Heading size={1} caps textColor="react">React</Heading>
                </div>
              </Appear>
              <Appear fid="2">
                <Heading size={4} textColor="react">as View Layer</Heading>
              </Appear>
            </Fill>
            <Fill>
              <Appear fid="3">
                <div>
                  <Image src={images.redux} width="25%" margin="11px 0"/>
                  <Heading size={1} caps textColor="redux">Redux</Heading>
                </div>
              </Appear>
              <Appear fid="4">
                <Heading size={4} textColor="redux">as Data Layer</Heading>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        {/* THREE PRINCIPLES OF REDUX */}
        <Slide transition={["spin"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="quartenary" caps>Three Principles of</Heading>
          <Heading size={3} textColor="redux" caps margin="0 0 30px 0">Redux</Heading>
          <List>
            <ListItem>Single Source of Truth</ListItem>
            <ListItem>State is Read-Only</ListItem>
            <ListItem>Changes are Made with Pure Functions</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps margin="0 0 30px 0">Single Source of Truth</Heading>
          <Layout>
            <Fit>
              <CodePane
                textSize="18"
                lang="js"
                source={require("raw-loader!../assets/first-principle.code")}
              />
            </Fit>
            <Fill>
              <List margin="20px 0 0 20px">
                <Appear fid="1">
                  <ListItem textColor="quartenary" textSize="30">One JavaScript object for the <S type="bold">entire state</S> of the application</ListItem>
                </Appear>
                <Appear fid="2">
                  <ListItem textColor="quartenary" textSize="30">All changes and mutations are <S type="bold">explicit</S></ListItem>
                </Appear>
                <Appear fid="3">
                  <ListItem textColor="quartenary" textSize="30">Easy to track <S type="bold">state changes</S> overtime</ListItem>
                </Appear>
                <Appear fid="4">
                  <ListItem textColor="quartenary" textSize="30">Easy to implement difficult features such as <S type="bold">Undo/Redo</S></ListItem>
                </Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <CodeSlide
          textSize="25"
          transition={["fade"]}
          lang="jsx"
          code={require("raw-loader!../assets/reducer.example")}
          ranges={[
            { loc: [0, 11], title: "Reducer" },
            { loc: [0, 1], note: "Accepts State & Action" },
            { loc: [1, 6], note: "Action Switch" },
            { loc: [6, 8], note: "Return the previous State in the default case" }
          ]}
        />
        {/* SAMPLE SLIDES */}
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={6} textColor="tertiary" caps>Reducer</Heading>
          <CodePane
            textSize="18"
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
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
          <Interactive/>
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
      </Deck>
    );
  }
}
