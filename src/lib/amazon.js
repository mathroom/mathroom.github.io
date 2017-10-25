function amazon_segment(w, l, d, h) {
  let c = l * 2 + d + h;
  if (w <= 0.75 && d <=12 && h <=0.75) {
    return "p1";
  }
  if (w <= 20 && l <= 18 && d <=14 && h <=8) {
    return "p2";
  }
  if (w <= 70 && l <= 60 && d <= 30 && c <= 130) {
    return "p3";
  }
  if (w <= 150 && l <= 108 && c <= 130) {
    return "p4";
  }
  if (w <= 150 && l <= 108 && c <= 165) {
    return "p5";
  }
  return "p6";
}

function amazon_fee(w, l, d, h, t) {
  let k = l * d * h / 166.0;
  if (w > k) {
    k = w;
  }

  const p = amazon_segment(w, l, d, h);

  switch(p) {
    case "p1":
      if(k <= 1 && t <=9) {
        return 2.41;
      }
      if (k <= 1 && t > 9) {
        return 2.39;
      }
      //TODO:
      return 0;
    case "p2":
      if (k <= 1 && t <= 9) {
        return 2.99;
      }
      if (k <= 1 && t > 9) {
        return 2.88;
      }
      if (k <= 2 && t <= 9) {
        return 4.18;
      }
      if (k <= 2 && t > 9) {
        return 3.96;
      }
      if (k > 2 && t <= 9) {
        return 4.18+(k-2) * 0.39;
      }
      if (k > 2 && t > 9) {
        return 3.96+(k-2) * 0.35;
      }
      return 0;
    case "p3":
      if (t <= 9) {
        return 6.85+(k-2) * 0.39;
      }
      if (t > 9) {
        return 6.69 + (k-2) * 0.35;
      }
      return 0;
    case "p4":
      if (t <= 9) {
        return 9.20 + (k-2) * 0.39;
      }
      if (t > 9) {
        return 8.73 + (k-2) * 0.35;
      }
      return 0;
    case "p5":
      if (t <= 9) {
        return 75.06 + (k-90) * 0.8;
      }
      if (t > 9) {
        return 8.73 + (k - 90) * 0.76;
      }
      return 0;
    case "p6":
      if (t <= 9) {
        return 138.08 + (w - 90) * 0.92;
      }
      if (t > 9) {
        return 131.44 + (w - 90) * 0.88;
      }
      return 0;
    default:
      break;
  }

  return 0;
}

module.exports = {
  amazon_segment,
  amazon_fee,
}
