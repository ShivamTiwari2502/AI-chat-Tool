function checkHeading(str) {
  return /^(\*)(\*)(.*)\*$/.test(str);
}

function replaceHeadingStarts(str) {
  return str.replace(/^(\*)(\*)|(\*)$/g, "");
}
export { checkHeading, replaceHeadingStarts };
