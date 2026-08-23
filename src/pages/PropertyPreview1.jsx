import React, { useMemo } from 'react'

export default function PropertyPreview() {
  const params = new URLSearchParams(window.location.search)

  const descriptionHtml = params.get('description') || '<p>No description provided</p>'
  const pricingFormula = params.get('pricingFormula') || '250000 + 50000'

  const estimatedPrice = useMemo(() => {
    return eval(pricingFormula)
  }, [pricingFormula])

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Property Preview</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Estimated Price</h2>
        <p>{String(estimatedPrice)}</p>
      </section>
    </main>
  )
}
