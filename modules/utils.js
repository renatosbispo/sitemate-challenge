export async function injectHtmlTemplates() {
  const templates = document.querySelectorAll(
    '#injectable-templates > template'
  );

  for (let template of templates) {
    const { id } = template;

    const templateStructureResponse = await fetch(
      `templates/${id}/structure.html`
    );

    const templateStyleResponse = await fetch(`templates/${id}/style.css`);

    const templateHtml = await templateStructureResponse.text();
    const templateStyle = await templateStyleResponse.text();

    document.getElementById(
      id
    ).innerHTML = `<style>${templateStyle}</style>${templateHtml}`;
  }
}
