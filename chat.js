export default {
  async fetch(request) {
    const url = "https://openrouter.ai/api/v1/chat/completions";
    
    const apiKey = "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"; // Coloque sua chave aqui
    const body = await request.json();
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    
    return new Response(await response.text(), {
      headers: { "Content-Type": "application/json" }
    });
  }
};
