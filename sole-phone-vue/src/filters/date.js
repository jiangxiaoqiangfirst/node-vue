import file from './filezreo'

export default (time)=>{
    let d = new Date();
    d.setTime(time);
    let y = d.getFullYear();
    let m = d.getMonth()+1;
    let n =d.getDate();

    let h =d.getHours();
    let mi = d.getMinutes();
    let s = d.getSeconds();
    // return y+'年'+file(m)+'月'+file(n)+'日'+' '+ h+':'+mi+':'+s
    return `${y}年${file(m)}月${file(n)}日 ${file(h)}:${file(mi)}:${file(s)}`;
}