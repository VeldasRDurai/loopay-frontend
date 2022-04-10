import useAsync from "./useAsync";

export default function useScript(url) {
  return useAsync(() => {
    const script = document.createElement("script")
    script.src = url
    script.async = true

    return new Promise((resolve, reject) => {
      script.addEventListener("load", resolve)
      script.addEventListener("error", reject)
      document.body.appendChild(script)
    })
  }, [url])
}
// eg: const { Stripe } = useScript('https://js.stripe.com/v2/', 'Stripe')
// REFERENCE

// 1. https://stackoverflow.com/a/65189254/14476642
// 2. https://github.com/WebDevSimplified/useful-custom-react-hooks/blob/main/src/11-useScript/useScript.js