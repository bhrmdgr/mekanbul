const hakkinda = function (req, res) {
    res.render('hakkinda', { "title": "hakkinda" });
  };

  module.exports={
    hakkinda
  }
var express = require('express');
var router = express.Router();

const anaSayfa = function (req, res) {
  res.render('anasayfa', { "title": "Anasayfa" });
};

const mekanBilgisi = function (req, res) {
  res.render('mekanbilgisi', { "title": "Mekan bilgisi" });
};

const yorumEkle = function (req, res) {
  res.render('yorumekle', { "title": "Yorum ekle" });
};



module.exports = {

  anaSayfa,
  mekanBilgisi,
  yorumEkle
}