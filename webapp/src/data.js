// Sample lesson: Computer Network Protocols. Draft content for the proof of concept: not yet reviewed by a lecturer.
export const DECK = {
  title: 'Computer Network Protocols',
  sources: [
    'RFC 1122, Requirements for Internet Hosts: Communication Layers',
    'RFC 1034, Domain Names: Concepts and Facilities',
    'RFC 1035, Domain Names: Implementation and Specification',
    'RFC 9293, Transmission Control Protocol (TCP)',
    'RFC 768, User Datagram Protocol (UDP)',
    'RFC 9110, HTTP Semantics',
    'RFC 8446, TLS Version 1.3'
  ]
};

export const SLIDE_TITLES = [
  'What a protocol is', 'Four layers', 'One message, four layers', 'DNS: name to address', 'TCP or UDP', 'HTTP and HTTPS', 'Recap'
];

export const NARRATION = [
  'A protocol is an agreed set of rules for talking. Both sides must follow the same rules, or the message is lost.',
  'Network software is split into four layers. Application, transport, internet, and link. Each layer does one job and trusts the layer below it.',
  'When you send a post, each layer wraps your message in its own envelope. HTTP first, then TCP, then IP, then the Wi-Fi frame. The receiver unwraps them in the opposite order.',
  'Your phone does not know where example dot com lives. It asks a DNS resolver. The resolver looks the name up and answers with an I P address.',
  'TCP sets up a connection and resends anything lost, so it suits web pages and email. UDP just sends, which is faster but can lose data, so it suits calls and video.',
  'HTTPS is HTTP inside an encrypted tunnel. On café Wi-Fi, someone listening can read plain HTTP, but only scrambled bytes with HTTPS.',
  'Four things to keep. Protocols are shared rules. Layers each do one job. DNS finds the address. TCP is reliable and UDP is fast.'
];

export const SIDE = {
  1: {
    eyebrow: 'Side page · level 1', title: 'Why not ask every server?',
    body: 'There are millions of names and no single server holds them all. DNS splits the job into levels, like a phone book split by region.',
    steps: [
      ['1', 'The resolver asks a root server which servers handle .com.'],
      ['2', 'A .com server points to the server for example.com.'],
      ['3', 'That server gives the address. The resolver remembers it for a while.']
    ],
    source: 'RFC 1034, Domain Names: Concepts and Facilities'
  },
  2: {
    eyebrow: 'Side page · level 2', title: 'Why the second lookup is faster',
    body: 'The resolver keeps each answer for a time set by the name’s owner, called the TTL. Until it runs out, the resolver answers from memory and skips the root and .com steps.',
    rows: [['Name', 'example.com'], ['Address', '192.0.2.10'], ['TTL', '300 seconds']],
    source: 'RFC 1034 and RFC 1035, caching and time to live'
  }
};

export const REVIEW = [
  { title: 'DNS: name to address', slide: 4, due: 'Due today', q: 'Why does your phone ask a resolver and not every server?', a: 'No single server knows every name. The resolver walks down the levels (root, .com, the site’s own server) and remembers the answer for its TTL, so most lookups are fast.' },
  { title: 'TCP or UDP', slide: 5, due: 'Due in 2 days' },
  { title: 'Why HTTPS hides your password', slide: 6, due: 'Due in 4 days' }
];

export const QUIZ = [
  { q: 'Which layer turns example.com into an IP address for your phone?', o: ['Link', 'DNS, in the application layer', 'TCP, in the transport layer'], c: 1, why: 'DNS runs at the application layer. A resolver answers the question "where is this name?".' },
  { q: 'Which protocol resends data that gets lost on the way?', o: ['TCP', 'UDP', 'DNS'], c: 0, why: 'TCP numbers its data and resends anything that is not acknowledged. UDP does not.' },
  { q: 'On café Wi-Fi, what does HTTPS stop a stranger from doing?', o: ['Seeing that you visited the site', 'Reading your password in transit', 'Slowing the Wi-Fi down'], c: 1, why: 'TLS encrypts the HTTP traffic. The listener sees scrambled bytes instead of your password.' },
  { q: 'In "one message, four layers", which layer adds the IP addresses?', o: ['Internet', 'Application', 'Link'], c: 0, why: 'The internet layer adds source and destination IP addresses so routers can forward the packet.' },
  { q: 'A video call can lose a few packets and carry on. Which protocol suits it?', o: ['TCP', 'UDP', 'HTTPS'], c: 1, why: 'UDP does not stop to resend. A late packet is worth less than the next one.' }
];
