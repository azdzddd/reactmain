import React from 'react';
import { Link } from 'react-router-dom';
import './b.css';

export default function b() {
  return (
    <div>
      这是b路由页面
      <Link to="/a/b/purehtml">点击渲染原生html页面</Link>
      <div id="containerB"></div>
    </div>
  );
}
