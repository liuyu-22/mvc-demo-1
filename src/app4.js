import "./app4.css";
import $ from "jquery";

const $circle = $("app4 . circle");

$circle
  .on("mouseenter", () => {
    $circle.addClass("active"); //鼠标进去了 添加class
  })
  .on("mouseleave", () => {
    $circle.removeClass("active"); //鼠标移出 删除class
  });
