export default function (Alpine) {
  Alpine.magic('scrollAmount', () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100
    )

    return {
      scrollPx: window.scrollY,
      scrollPercent: scrollPercent,
      atStart: scrollPercent == 0,
      atEnd: scrollPercent == 100,
    }
  })
}
