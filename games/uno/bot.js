window.PlayHub=window.PlayHub||{};window.PlayHub.UNO=window.PlayHub.UNO||{};
(function(P){P.UNOBot={choose(hand,currentColor,discardTop){const valid=hand.filter(c=>P.UNOUtil.canPlay(c,currentColor,discardTop,hand));if(!valid.length)return null;const specials=valid.filter(c=>c.type!=='number');return P.Utils.choice((specials.length&&Math.random()<.65)?specials:valid)}}})(window.PlayHub);
