(this["webpackJsonpreact-quiz-app"]=this["webpackJsonpreact-quiz-app"]||[]).push([[0],{10:function(e,t,s){},11:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s(1),c=s.n(n),i=s(4),o=s.n(i),a=(s(10),s(2)),x=[{questionText:"What is the capital of France?",answerOptions:[{answerText:"New York",isCorrect:!1},{answerText:"London",isCorrect:!1},{answerText:"Paris",isCorrect:!0},{answerText:"Dublin",isCorrect:!1}]},{questionText:"Who is CEO of Tesla?",answerOptions:[{answerText:"Jeff Bezos",isCorrect:!1},{answerText:"Elon Musk",isCorrect:!0},{answerText:"Bill Gates",isCorrect:!1},{answerText:"Tony Stark",isCorrect:!1}]},{questionText:"The iPhone was created by which company?",answerOptions:[{answerText:"Apple",isCorrect:!0},{answerText:"Intel",isCorrect:!1},{answerText:"Amazon",isCorrect:!1},{answerText:"Microsoft",isCorrect:!1}]},{questionText:"How many Harry Potter books are there?",answerOptions:[{answerText:"1",isCorrect:!1},{answerText:"4",isCorrect:!1},{answerText:"6",isCorrect:!1},{answerText:"7",isCorrect:!0}]}];function u(){var e=Object(n.useState)(0),t=Object(a.a)(e,2),s=t[0],c=t[1],i=Object(n.useState)(!1),o=Object(a.a)(i,2),u=o[0],l=o[1],w=Object(n.useState)(0),j=Object(a.a)(w,2),T=j[0],h=j[1];return Object(r.jsx)("div",{className:"app",children:u?Object(r.jsxs)("div",{className:"score-section",children:["You scored ",T," out of ",x.length]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"question-section",children:[Object(r.jsxs)("div",{className:"question-count",children:[Object(r.jsxs)("span",{children:["Question ",s+1]}),"/",x.length]}),Object(r.jsx)("div",{className:"question-text",children:x[s].questionText})]}),Object(r.jsx)("div",{className:"answer-section",children:x[s].answerOptions.map((function(e){return Object(r.jsx)("button",{onClick:function(){return function(e){var t=s+1;e&&h(T+1),t<x.length?c(t):l(!0)}(e.isCorrect)},children:e.answerText})}))})]})})}o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.5bf7a6bd.chunk.js.map