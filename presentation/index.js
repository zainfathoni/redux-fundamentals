// Import React
import React from "react";
import CodeSlide from "spectacle-code-slide";
import Todo from "../assets/app/todo";

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
  pattern: require("../assets/images/react-pattern.png"),
  redux: require("../assets/images/redux-logo.png"),
  react: require("../assets/images/react-logo.svg"),
  bukalapak: require("../assets/images/bukalapak-logo.png"),
  mentosCoke: require("../assets/images/mentos-coke.gif"),
  todoAppStore: require("../assets/images/todo-app-store.png")
};

const codes = {
  reactPattern: require("raw-loader!../assets/codes/react-pattern.code"),
  firstPrinciple: require("raw-loader!../assets/codes/first-principle.code"),
  secondPrinciple: require("raw-loader!../assets/codes/second-principle.code"),
  thirdPrinciple: require("raw-loader!../assets/codes/third-principle.code"),
  pureFunctions: require("raw-loader!../assets/codes/pure-functions.code"),
  impureFunctions: require("raw-loader!../assets/codes/impure-functions.code"),
  counter: require("raw-loader!../assets/codes/counter.code"),
  actionStructure: require("raw-loader!../assets/codes/action-structure.code"),
  actions: require("raw-loader!../assets/codes/actions.code"),
  stateShape: require("raw-loader!../assets/codes/state-shape.code"),
  reducerStructure: require("raw-loader!../assets/codes/reducer-structure.code"),
  todoAppReducer: require("raw-loader!../assets/codes/todo-app-reducer.code"),
  reducerComposition: require("raw-loader!../assets/codes/reducer-composition.code"),
  storeMethods: require("raw-loader!../assets/codes/store-methods.code"),
  todoAppStore: require("raw-loader!../assets/codes/todo-app-store.code"),
  createStore: require("raw-loader!../assets/codes/create-store.code"),
  createStoreMagic: require("raw-loader!../assets/codes/create-store-magic.code")
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
  secondary: "Source Sans Pro",
  monospace: "monospace"
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
            <ListItem>Working Example</ListItem>
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
          code={codes.reactPattern}
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
        <Slide transition={["spin", "slide"]} bgColor="primary" textColor="tertiary">
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
                source={codes.firstPrinciple}
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
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps margin="0 0 30px 0">State is Read-Only</Heading>
          <Layout>
            <Fit>
              <CodePane
                textSize="18"
                lang="js"
                source={codes.secondPrinciple}
              />
            </Fit>
            <Fill>
              <List margin="20px 0 0 20px">
                <Appear fid="1">
                  <ListItem textColor="quartenary" textSize="30">The state tree is <S type="bold">read only</S></ListItem>
                </Appear>
                <Appear fid="2">
                  <ListItem textColor="quartenary" textSize="30">Any time you want to change the state, you have to dispatch an <S type="bold">action</S></ListItem>
                </Appear>
                <Appear fid="3">
                  <ListItem textColor="quartenary" textSize="30">An action is a <S type="bold">plain JS object</S> describing the change</ListItem>
                </Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary">Changes are Made with</Heading>
          <Heading size={3} textColor="tertiary" caps margin="0 0 30px 0">Pure Functions</Heading>
          <Layout>
            <Fit>
              <CodePane
                textSize="18"
                lang="js"
                source={codes.thirdPrinciple}
              />
            </Fit>
            <Fill>
              <List margin="20px 0 0 20px">
                <Appear fid="1">
                  <ListItem textColor="quartenary" textSize="30">Pure functions <S type="bold">don't have side effects</S> like network or database calls</ListItem>
                </Appear>
                <Appear fid="2">
                  <ListItem textColor="quartenary" textSize="30">Pure functions also <S type="bold">do not override the values</S> of anything</ListItem>
                </Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Layout>
            <Fill>
              <Heading size={3} textColor="tertiary" caps>Pure Functions</Heading>
            </Fill>
            <Fit>
              <Heading size={4} textColor="tertiary">vs</Heading>
            </Fit>
            <Fill>
              <Heading size={3} textColor="tertiary" caps>Impure Functions</Heading>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <CodePane
                textSize="18"
                lang="js"
                source={codes.pureFunctions}
                margin="20px 20px 0 0"
              />
            </Fill>
            <Fill>
              <CodePane
                textSize="18"
                lang="js"
                source={codes.impureFunctions}
                margin="20px 0 0 20px"
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide align="center center">
          <ComponentPlayground
            code={codes.counter}
          />
        </Slide>
        <Slide transition={["spin"]} width="100%" >
          <Heading size={2} textColor="quartenary" margin="0 0 50px 0" caps>Building Todo App</Heading>
        </Slide>
        {/* ACTIONS */}
        <CodeSlide
          textSize="25"
          transition={["fade"]}
          lang="jsx"
          code={codes.actionStructure}
          ranges={[
            { loc: [0, 6], title: "Action Structure" },
            { loc: [0, 1], title: "Action Structure", note: "Type Constant" },
            { loc: [3, 4], title: "Action Structure", note: "Action Type" },
            { loc: [4, 5], title: "Action Structure", note: "Action Payload (could be anything)" },
            { loc: [2, 6], title: "Action Structure", note: "Action Object" }
          ]}
        />
        <CodeSlide
          textSize="18"
          transition={["fade"]}
          lang="jsx"
          code={codes.actions}
          ranges={[
            { loc: [0, 31], title: "Actions" },
            { loc: [0, 3], title: "Actions", note: "Action Types" },
            { loc: [4, 9], title: "Actions", note: "Other Constants" },
            { loc: [10, 30], title: "Actions", note: "Action Creators" }
          ]}
        />
        <CodeSlide
          textSize="22"
          transition={["fade"]}
          lang="jsx"
          code={codes.stateShape}
          ranges={[
            { loc: [0, 13], title: "State Shape" },
            { loc: [1, 2], title: "State Shape", note: "Visibility Filter" },
            { loc: [2, 12], title: "State Shape", note: "Todos" }
          ]}
        />
        {/* REDUCERS */}
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps margin="0 0 30px 0">Reducer Structure</Heading>
          <CodePane
            textSize="30"
            lang="js"
            source={codes.reducerStructure}
          />
          <Appear fid="1">
            <Text textColor="quartenary" textSize="20" margin="20px 0 0 0">
              Why is it called a <S type="bold">reducer</S>?
            </Text>
          </Appear>
          <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" target="_blank">
            <Appear fid="2">
                <Text textColor="quartenary" textFont="monospace" textSize="20">
                  <S type="underline">Array.prototype.reduce(reducer, ?initialValue)</S>
                </Text>
            </Appear>
          </Link>
          <Appear fid="3">
            <Text textColor="quartenary" textSize="30" margin="30px 0 0 0">
              Things you should <S type="bold">never</S> do inside a reducer:
            </Text>
          </Appear>
          <List margin="20px 0 0 0">
            <Appear fid="1">
              <ListItem textColor="quartenary" textSize="30"><S type="bold">Mutate</S> its arguments</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="quartenary" textSize="30">Perform <S type="bold">side effects</S> like API calls and routing transitions</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="quartenary" textSize="30">Call <S type="bold">non-pure functions</S>, e.g. Date.now() or Math.random()</ListItem>
            </Appear>
          </List>
        </Slide>
        <CodeSlide
          textSize="25"
          transition={["fade"]}
          lang="jsx"
          code={codes.todoAppReducer}
          ranges={[
            { loc: [12, 13], title: "Todo App Reducer" },
            { loc: [1, 4], title: "Todo App Reducer", note: "Import Action Types" },
            { loc: [4, 5], title: "Todo App Reducer", note: "Import Other Constants" },
            { loc: [7, 11], title: "Todo App Reducer", note: "Set Initial State" },
            { loc: [12, 13], title: "Todo App Reducer", note: "Accepts State & Action" },
            { loc: [13, 14], title: "Todo App Reducer", note: "Action Switch" },
            { loc: [39, 41], title: "Todo App Reducer", note: "Return the previous State in the default case" },
            { loc: [14, 18], title: "Set Visibility Filter Handler" },
            { loc: [15, 16], title: "Set Visibility Filter Handler", note: "Using Object.assign{} to avoid State mutation" },
            { loc: [16, 17], title: "Set Visibility Filter Handler", note: "Replace visibilityFilter's value with a new one" },
            { loc: [18, 28], title: "Add Todo Handler" },
            { loc: [19, 20], title: "Add Todo Handler", note: "Using Object.assign{} to avoid State mutation" },
            { loc: [21, 22], title: "Add Todo Handler", note: "Using Spread (...) operator to copy existing todos array elements" },
            { loc: [22, 26], title: "Add Todo Handler", note: "Add a new element at the end of todos array" },
            { loc: [28, 39], title: "Toggle Todo Handler" },
            { loc: [29, 30], title: "Toggle Todo Handler", note: "Using Object.assign{} to avoid State mutation" },
            { loc: [30, 31], title: "Toggle Todo Handler", note: "Using map to avoid todos mutation" },
            { loc: [31, 32], title: "Toggle Todo Handler", note: "Update todo element if the index matches" },
            { loc: [32, 35], title: "Toggle Todo Handler", note: "Using Object.assign{} (again) to avoid todo mutation" },
            { loc: [36, 37], title: "Toggle Todo Handler", note: "Return old todo element if the index doesn't match" }
          ]}
        />
        <CodeSlide
          textSize="16"
          transition={["fade"]}
          lang="jsx"
          code={codes.reducerComposition}
          ranges={[
            { loc: [40, 46], title: "Reducer Composition" },
            { loc: [1, 5], title: "Reducer Composition", note: "Imports, as usual" },
            { loc: [7, 15], title: "Visibility Filter Reducer" },
            { loc: [7, 8], title: "Visibility Filter Reducer", note: "Still accepts State & Action" },
            { loc: [7, 8], title: "Visibility Filter Reducer", note: "State is a Visibility Filter constant, with SHOW_ALL as the initial State" },
            { loc: [8, 9], title: "Visibility Filter Reducer", note: "Action Switch, as usual" },
            { loc: [11, 13], title: "Visibility Filter Reducer", note: "Return the previous State in the default case, as usual" },
            { loc: [9, 11], title: "Set Visibility Filter Handler" },
            { loc: [10, 11], title: "Set Visibility Filter Handler", note: "Only manage a slice of the state, hence not using Object.assign{} anymore" },
            { loc: [10, 11], title: "Set Visibility Filter Handler", note: "Directly replaces previous State with the action's payload instead" },
            { loc: [16, 39], title: "Todos Reducer" },
            { loc: [16, 17], title: "Todos Reducer", note: "Still accepts State & Action" },
            { loc: [16, 17], title: "Todos Reducer", note: "State is a todos array, with empty array as the initial State" },
            { loc: [17, 18], title: "Todos Reducer", note: "Action Switch, as usual" },
            { loc: [35, 37], title: "Todos Reducer", note: "Return the previous State in the default case, as usual" },
            { loc: [18, 26], title: "Add Todo Handler" },
            { loc: [19, 26], title: "Add Todo Handler", note: "Only manage a slice of the state, hence not using Object.assign{} anymore" },
            { loc: [20, 21], title: "Add Todo Handler", note: "Using Spread (...) operator to copy existing todos array elements" },
            { loc: [21, 25], title: "Add Todo Handler", note: "Add a new element at the end of todos array" },
            { loc: [26, 35], title: "Toggle Todo Handler" },
            { loc: [27, 28], title: "Toggle Todo Handler", note: "Only manage a slice of the state, hence not using Object.assign{} anymore" },
            { loc: [27, 28], title: "Toggle Todo Handler", note: "Using map to avoid todos mutation" },
            { loc: [28, 29], title: "Toggle Todo Handler", note: "Update todo element if the index matches" },
            { loc: [29, 32], title: "Toggle Todo Handler", note: "Using Object.assign{} (again) to avoid todo mutation" },
            { loc: [33, 34], title: "Toggle Todo Handler", note: "Return old todo element if the index doesn't match" },
            { loc: [40, 46], title: "Todo App Combined Reducers" },
            { loc: [40, 41], title: "Todo App Combined Reducers", note: "Still accepts State & Action" },
            { loc: [40, 41], title: "Todo App Combined Reducers", note: "State is an object, with an empty object as the initial State, since the initial State are determined in each reducer" },
            { loc: [41, 45], title: "Todo App Combined Reducers", note: "Returns a global State object, consists of 2 parts which are managed by their own reducers" },
            { loc: [42, 43], title: "Todo App Combined Reducers", note: "Visibility Filter part is determined by the Visibility Filter Reducer, by providing the part of the global State as the parameter" },
            { loc: [43, 44], title: "Todo App Combined Reducers", note: "Todos part is determined by the Todos Reducer, by providing the part of the global State as the parameter" }
          ]}
        />
        {/* STORES */}
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps margin="0 0 30px 0">Store Methods</Heading>
          <CodePane
            textSize="25"
            lang="js"
            source={codes.storeMethods}
          />
          <Appear fid="1">
            <Text textColor="quartenary" textSize="30" margin="30px 0 0 0">
              Store <S type="bold">responsibilities</S>:
            </Text>
          </Appear>
          <List margin="20px 0 0 0">
            <Appear fid="1">
              <ListItem textColor="quartenary" textSize="30">Holds application <S type="bold">state</S></ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="quartenary" textSize="30">Allows access to state via <S type="bold">getState()</S></ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="quartenary" textSize="30">Allows state to be updated via <S type="bold">dispatch(action)</S></ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem textColor="quartenary" textSize="30">Registers listeners via <S type="bold">subscribe(listener)</S></ListItem>
            </Appear>
            <Appear fid="5">
              <ListItem textColor="quartenary" textSize="30"><S type="bold">Unregisters</S> listeners via the function returned by <S type="bold">subscribe(listener)</S></ListItem>
            </Appear>
          </List>
        </Slide>
        <CodeSlide
          textSize="21"
          transition={["fade"]}
          lang="jsx"
          code={codes.todoAppStore}
          ranges={[
            { loc: [0, 26], title: "Todo App Store" },
            { loc: [0, 1], title: "Todo App Store", note: "Import createStore" },
            { loc: [1, 2], title: "Todo App Store", note: "Import Reducers" },
            { loc: [2, 8], title: "Todo App Store", note: "Import Actions" },
            { loc: [9, 10], title: "Create Store", note: "What the hell is this??" },
            { loc: [11, 12], title: "getState()", note: "Log the initial state" },
            { loc: [13, 16], title: "subscribe(listener)", note: "Every time the state changes, log it" },
            { loc: [17, 23], title: "dispatch(action)", note: "Dispatch some actions" },
            { loc: [24, 25], title: "unsubscribe()", note: "Stop listening to state updates" }
          ]}
        />
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps margin="0 0 30px 0">Store Console Logs</Heading>
          <Image src={images.todoAppStore} height={550}/>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps margin="0 0 30px 0">Create Store</Heading>
          <CodePane
            textSize="25"
            lang="js"
            source={codes.createStore}
          />
          <Appear fid="1">
            <Text textColor="quartenary" textSize="30" margin="20px 0 0 0">
              What the hell is <S type="bold">createStore()</S>?
            </Text>
          </Appear>
          <Appear fid="2">
            <Text textColor="quartenary" textSize="30" margin="20px 0 0 0">
              Redux tries to avoid <S type="italic">'magic'</S> which causes unpredictability,<br/>but why is <S type="bold">createStore()</S> allowed to do such <S type="italic">'magic'</S> in Redux?
            </Text>
          </Appear>
          <Link href="https://github.com/tayiorbeii/egghead.io_redux_course_notes/blob/master/03-Implementing_Store_from_Scratch.md" target="_blank">
            <Appear fid="3">
                <Text textColor="quartenary" textSize="30" margin="20px 0 0 0">
                  Well, here's where the magic comes from:<br/><S type="underline">Implementing Store from Scratch</S>
                </Text>
            </Appear>
          </Link>
          <Appear fid="4">
            <Text textColor="quartenary" textSize="30" margin="30px 0 0 0">
              Let's brake the <S type="italic">'magic'</S> down.
            </Text>
          </Appear>
        </Slide>
        <CodeSlide
          textSize="21"
          transition={["fade"]}
          lang="jsx"
          code={codes.createStoreMagic}
          ranges={[
            { loc: [0, 25], title: "Create Store 'Magic'" },
            { loc: [0, 1], title: "Create Store 'Magic'", note: "Accepts Combined Reducer" },
            { loc: [1, 2], title: "Create Store 'Magic'", note: "Hold the State object" },
            { loc: [2, 3], title: "Create Store 'Magic'", note: "Array of Listener Functions" },
            { loc: [4, 5], title: "getState()", note: "Simply returns the State object" },
            { loc: [6, 7], title: "dispatch(action)", note: "Accepts an Action" },
            { loc: [7, 8], title: "dispatch(action)", note: "Execute Combined Reducer to the State, then update the new State" },
            { loc: [8, 9], title: "dispatch(action)", note: "Execute All Listener Functions" },
            { loc: [11, 12], title: "subscribe(listener)", note: "Accepts a Listener Function" },
            { loc: [12, 13], title: "subscribe(listener)", note: "Push the function to Listeners array" },
            { loc: [13, 16], title: "subscribe(listener)", note: "Return the unsubscribe() function" },
            { loc: [18, 19], title: "Dummy dispatch({})", note: "Initialize State by calling an empty dispatch()" },
            { loc: [20, 21], title: "Create Store Methods", note: "Return all 3 defined methods above" }
          ]}
        />
        {/* Working Exapmle */}
        <Slide transition={["spin"]} bgColor="primary" width="100%" >
          <Heading size={2} textColor="quartenary" margin="0 0 50px 0" caps>Working Example</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="quartenary" margin="0 0 50px 0" caps>Todo App</Heading>
          <Todo/>
        </Slide>
        {/* WHAT'S NEXT? */}
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" caps margin="0 0 30px 0">What's Next?</Heading>
            <Appear fid="1">
              <Text textColor="quartenary" textSize="40" margin="30px 0 0 0">
                Do you want to use Redux?<br/>There are so many things to learn ahead.
              </Text>
            </Appear>
            <Appear fid="2">
              <Text textColor="quartenary" textSize="40" margin="30px 0 0 0">
                But before actually use Redux in your app,<br/>please reconsider this:
              </Text>
            </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="quartenary" textColor="primary">
          <BlockQuote>
            <Quote>
              <Link href="https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367">
                <Text textColor="primary" textSize={70}>
                  <S type="underline">You Might Not Need Redux</S>
                </Text>
              </Link>
            </Quote>
            <Cite textColor="secondary">Dan Abramov, the creator of Redux</Cite>
          </BlockQuote>
        </Slide>
        {/* Q/A */}
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} textColor="tertiary" caps margin="0 0 30px 0">Q/A</Heading>
        </Slide>
      </Deck>
    );
  }
}
