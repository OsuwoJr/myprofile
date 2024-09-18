<script>
    export let text;
    export let link = "";
    export let email = "";
    export let phone = "";
</script>

<a 
    class="blueShadow relative overflow-hidden px-2 md:px-5 py-2 group rounded-full bg-white text-slate-950 max-w-max" 
    href={email 
        ? `mailto:${email}?subject=Hello&body=Hi%20there,%0D%0A%0D%0AI%27m%20reaching%20out%20regarding...` 
        : phone 
        ? `tel:${phone}` 
        : link} 
    target={link ? "_blank" : null} 
    rel={link ? "noopener noreferrer" : null}
>
    {text}
</a>
