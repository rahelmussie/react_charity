import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import LogoImg from 'home/rahel/src/my-img/jumbotron1.jpg';


// const element = <h1>WHERE YOU CAN HELP</h1>;
// ReactDOM.render(
// element,
// document.getElementById('root')
// );

// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <h4>{post.title}</h4>
//       <p>{post.content}</p>

//     </div>
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// const posts = [
//   {id: 1, title: 'mekedonia', content: 'Welcome to mekedonia!'},
//   {id: 2, title: 'merryjoy', content: 'welcome to merryjoy'},
//   {id: 3, title: 'tesfabirhan', content: 'welcome to tesfabirhans'}
//   ];
// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('root')
// );
function ActionLink() {
	function handleClick(e){
		e.preventDefault();
		console.log('The link was clicked');
	}
}
class MainMenu extends React.Component {
	render() {
		return(
			<div className="Main-Menu">
			<h1>Where YOU CAN HELP {this.props.name}</h1>
			
			<ui>
			<li id="l1">
			<span>Mekedonia</span>
			<div>
			<a href="mekedonia.html" title="Mekedonia Page">
			<img src={require('./my-img/jumbotron-1.jpg')} width="300" height="150" alt="mekedonia">
			</img>
			</a>
			</div>
			</li>
			<li id="l2">
			<span>Merryjoy</span>
			<div>
			<a href="merryjo.html" title="Merryjoy Page">
			<img src={require('./my-img/jumbotron2.jpg')} width="300" height="150" alt="merryjoy">
			</img></a>
			</div>
			</li>

			<li id="l3">
			<span>Tesfa Birhan</span>
			<div>
			<a href="tesfabirhan.html" title="tesfabirhan Page">
			<img src={require('./my-img/jumbotron3.jpg')} width="300" height="150" alt="tesfabirhan">
			</img></a>
			</div>
			</li>
			<li id="l4">
			<span>Others</span>
			<div>
			<a href="others.html" title="others page">
			<img src={require('./my-img/tes_edited.jpg')} width="300" height="150" alt="others"></img>
			</a>
			</div>
			</li>

			</ui>

			</div>
			);
		}
	}
	ReactDOM.render(
	<MainMenu />,
	document.getElementById('root')
	);



