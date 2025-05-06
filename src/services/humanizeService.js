export async function humanizeText(text, level = 'medium') {
    
    try {
      try {
        throw new Error('Using fallback method');
      } catch (error) {
        return localHumanize(text, level);
      }
    } catch (err) {
      throw new Error('Failed to humanize text: ' + err.message);
    }
  }
  
  function localHumanize(text, level) {
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    let transformedSentences = sentences.map(sentence => {
      let processed = sentence.trim().replace(/\s+/g, ' ');
      switch (level) {
        case 'light':
          processed = applyLightTransformations(processed);
          break;
        case 'heavy':
          processed = applyHeavyTransformations(processed);
          break;
        case 'medium':
        default:
          processed = applyMediumTransformations(processed);
      }
      
      return processed;
    });
    
    return transformedSentences.join(' ');
  }
  
  function applyLightTransformations(sentence) {
    sentence = sentence
      .replace(/\b(however)\b/gi, 'but')
      .replace(/\b(therefore)\b/gi, 'so')
      .replace(/\b(additionally)\b/gi, 'also')
      .replace(/\b(utilize)\b/gi, 'use')
      .replace(/\b(obtain)\b/gi, 'get');
    
    sentence = sentence
      .replace(/\b(it is)\b/gi, "it's")
      .replace(/\b(that is)\b/gi, "that's")
      .replace(/\b(there is)\b/gi, "there's");
    
    return sentence;
  }
  
  function applyMediumTransformations(sentence) {
    sentence = applyLightTransformations(sentence);
    
    sentence = sentence
      .replace(/\b(I am)\b/g, "I'm")
      .replace(/\b(you are)\b/gi, "you're")
      .replace(/\b(they are)\b/gi, "they're")
      .replace(/\b(we are)\b/gi, "we're")
      .replace(/\b(do not)\b/gi, "don't")
      .replace(/\b(does not)\b/gi, "doesn't")
      .replace(/\b(did not)\b/gi, "didn't")
      .replace(/\b(has not)\b/gi, "hasn't")
      .replace(/\b(have not)\b/gi, "haven't")
      .replace(/\b(would not)\b/gi, "wouldn't")
      .replace(/\b(could not)\b/gi, "couldn't")
      .replace(/\b(should not)\b/gi, "shouldn't");
    
    if (Math.random() > 0.7) {
      const fillers = [', well,', ', you know,', ', basically,', ', honestly,', ', actually,'];
      const filler = fillers[Math.floor(Math.random() * fillers.length)];
      
      const words = sentence.split(' ');
      if (words.length > 4) {
        const insertPosition = Math.floor(words.length / 3);
        words.splice(insertPosition, 0, filler);
        sentence = words.join(' ');
      }
    }
    
    return sentence;
  }
  
  function applyHeavyTransformations(sentence) {
    sentence = applyMediumTransformations(sentence);
    
    sentence = sentence
      .replace(/\b(approximately)\b/gi, "about")
      .replace(/\b(numerous)\b/gi, "lots of")
      .replace(/\b(assistance)\b/gi, "help")
      .replace(/\b(sufficient)\b/gi, "enough")
      .replace(/\b(purchase)\b/gi, "buy")
      .replace(/\b(inquire)\b/gi, "ask")
      .replace(/beginning\b/gi, "starting")
      .replace(/\b(attempt)\b/gi, "try");
    
    if (Math.random() > 0.6) {
      const starters = [
        "Look, ", 
        "So, ", 
        "Honestly, ", 
        "I think ", 
        "Basically, ", 
        "I mean, ", 
        "You know what, "
      ];
      const starter = starters[Math.floor(Math.random() * starters.length)];
      
      sentence = starter + sentence.charAt(0).toLowerCase() + sentence.slice(1);
    }
    
    if (Math.random() > 0.8) {
      sentence = sentence.replace(/\b(\w+)\b/, "$1... $1");
    }
    
    if (Math.random() > 0.95) {
      const words = sentence.split(' ');
      if (words.length > 3) {
        const randomWordIndex = Math.floor(Math.random() * words.length);
        const word = words[randomWordIndex];
        if (word.length > 4) {
          const pos = Math.floor(word.length / 2);
          const chars = word.split('');
          [chars[pos], chars[pos+1]] = [chars[pos+1], chars[pos]];
          words[randomWordIndex] = chars.join('');
          sentence = words.join(' ');
        }
      }
    }
    
    return sentence;
  }
  