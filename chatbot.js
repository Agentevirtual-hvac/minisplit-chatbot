const OPENAI_API_KEY = "PON_AQUI_TU_API_KEY";

async function enviarMensaje(pregunta) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "Eres un asistente experto en HVAC." },
                { role: "user", content: pregunta }
            ]
        })
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "Error al obtener respuesta.";
}

window.enviarMensaje = enviarMensaje;
