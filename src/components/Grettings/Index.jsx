export function Greetings(props) {
    return (

    <div className="greetings-container">

    <div className='greeting'>{props.lang === 'de' && <> Hallo </>}</div>

    <div className='greeting'>{props.lang === 'en' && <> Hello </>}</div>

    <div className='greeting'>{props.lang === 'es' && <> Hola </>}</div>

    <div className='greeting'>{props.lang === 'fr' && <> Bonjour </>}</div>

    {props.children}

  </div>
    )
}