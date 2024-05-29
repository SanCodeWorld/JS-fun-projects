export let findExactData = (list) => {
  let arr = list.dt_txt.split(" ");
  let s1 = arr[0];
  let s2 = arr[1];

  let dateStr = s1.substring(s1.length - 2);

  let d = new Date();
  let dateNum = d.getDate();

  if (dateStr != dateNum) return null;

  let hourNum = d.getHours();
  let hourStr = Number(s2.substring(0, 2));

  if (hourNum == hourStr || hourNum == hourStr + 1 || hourNum == hourStr + 2)
    return list;

  return null;
};
