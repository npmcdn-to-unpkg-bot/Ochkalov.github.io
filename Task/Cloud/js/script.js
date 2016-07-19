// определяем вес слова
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}
var rendomMinMax = function () {
    var rendomM = randomInteger(1, 15);
    return rendomM;
};
var rendom = function () {
    var weightWords = randomInteger(rendomMinMax(), rendomMinMax());
    return weightWords;
};

// создание массива тегов
var word_list = [
    {text:"devkeeper", weight: rendom()},
    {text:"индивидуальный подход", weight: rendom(), html:{title:"My Title", "class":"custom-class"}},
    {text:"поддержка", weight: rendom()},
    {text:"ит-консультации", weight: rendom()},
    {text:"дизайн", weight: rendom()},
    {text:"теплая атмосфера", weight:rendom()},
    {text:"креативные идеи", weight:rendom()},
    {text:"рациональные решения", weight:rendom()},
    {text:"зработка программного обеспечения", weight:rendom()}
];
$(function () {
    $(".promot-text").jQCloud(word_list);
});