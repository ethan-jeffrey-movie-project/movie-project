//
// function findContextSentences(text) {
// 	const pattern = /([A-Z][^.!?]*[.!?])\s+/g;
// 	const sentences = text.match(pattern);
// 	const results = [];
//
// 	const keywords = ['attention', 'trick', 'tricks'];
// 	for (let i = 0; i < sentences.length; i++) {
// 		const sentence = sentences[i];
// 		for (const keyword of keywords) {
// 			if (sentence.includes(keyword)) {
// 				const startIdx = Math.max(0, i - 3);
// 				const endIdx = Math.min(i + 4, sentences.length);
// 				const context = sentences.slice(startIdx, endIdx);
// 				const result = {
// 					keyword: keyword,
// 					context: context.join('\n')
// 				};
// 				results.push(result);
// 				break;
// 			}
// 		}
// 	}
//
// 	return results;
// }
//
//
// const text = "  ";
//
// // console.log(text);
// console.log(findContextSentences(text));
//
