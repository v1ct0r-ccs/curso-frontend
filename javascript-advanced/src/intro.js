// boolean
// string
// tuple
var title;
title: ["1", "Título"];
// enum { chave: valor}
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["red"] = "#f00";
    Color["gren"] = "#0f0";
    Color["blue"] = "#00f";
})(Color || (Color = {}));
