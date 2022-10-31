export default function (Alpine) {
  Alpine.magic('scrollAmount', () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100
    )

    return {
      px: window.scrollY,
      percent: scrollPercent,
      start: scrollPercent == 0,
      end: scrollPercent == 100,
    }
  })
}
