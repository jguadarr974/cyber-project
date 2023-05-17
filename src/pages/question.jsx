import React, {useState} from 'react';
import '../question.css';
import heart from "./heart.png";

function Question (questionIndex){
  const questions =[
    {
      questionText: 'What do you call a malicious software that attempts to infiltrate a system disguised as something different?',
      answerOptions:[
        { answerText: 'Trojan', isCorrect: true},
        { answerText: 'Worm', isCorrect: false},
        { answerText: 'Ransomware', isCorrect: false},
        { answerText: 'Keylogger', isCorrect: false},
      ],
      hint: 'Hint: Named after the famous story of a horse statue used by Greek soldiers to infiltrate a city.',
    },
    {
      questionText: "What is the process of validating a user's identity or device?",
      answerOptions:[
        { answerText: 'Authentication', isCorrect: true},
        { answerText: 'Updates', isCorrect: false},
        { answerText: 'Secure Passwords', isCorrect: false},
        { answerText: 'Auto logout', isCorrect: false},
      ],
      hint: 'Hint: This requires a user to provide something you know (passwords), have (tokens), or are (biometrics).',
    },
    {
      questionText: "Email authentication can help protect against phishing attacks. True or False?",
      answerOptions:[
        { answerText: 'True', isCorrect: true},
        { answerText: 'False', isCorrect: false},
      ],
      hint: 'Hint: Email authentication can also by the user to verify the validity of an email address.',
    },
    {
      questionText: "It is impossible to hijack an account that uses 2FA security.",
      answerOptions:[
        { answerText: 'True', isCorrect: false},
        { answerText: 'False', isCorrect: true},
      ],
      hint: 'Hint: New methods to bypass security are always being made.',
    },
    {
      questionText: "Who has the greatest influence over security access in a password authentication environment?",
      answerOptions:[
        { answerText: 'System Administrators', isCorrect: false},
        { answerText: 'Business Executives', isCorrect: false},
        { answerText: 'Users', isCorrect: true},
        { answerText: 'Security Managers', isCorrect: false},
      ],
      hint: 'Hint: Whoever creates the password has the responsibility of making it strong and confidential.',
    },
    {
      questionText: "Which cybersecurity principle is most important when attempting to trace the source of malicious activity?",
      answerOptions:[
        { answerText: 'Availability', isCorrect: false},
        { answerText: 'Integrity', isCorrect: false},
        { answerText: 'Nonrepudiation', isCorrect: true},
        { answerText: 'Confidentiality', isCorrect: false},
      ],
      hint: 'Hint: This is used to prove that someone did certain actions without deniability. ',
    },
    {
      questionText: "In practical applications: ",
      answerOptions:[
        { answerText: 'Symmetric key encryption is used to securely distribute asymmetric keys', isCorrect: false},
        { answerText: 'Asymmetric key encryption is used to securely obtain symmetric keys', isCorrect: true},
        { answerText: 'Symmetric key encryption is used only for short messages, such as digital signatures', isCorrect: false},
        { answerText: 'Asymmetric key encryption is used in cases where speed is important', isCorrect: false},
      ],
      hint: 'Hint: Asymmetric key encryption is typically slower than symmetric key encryption but provides stronger security and is used for exchanging keys securely.',
    },
    {
      questionText: "A passive network hub operates at which layer of the OSI model?",
      answerOptions:[
        { answerText: 'Data Link', isCorrect: false},
        { answerText: 'Physical', isCorrect: true},
        { answerText: 'Network', isCorrect: false},
        { answerText: 'Transport', isCorrect: false},
      ],
      hint: 'Hint: At the bottom of our OSI model.',
    },
    {
      questionText: "You get a text message from a vendor who asks you to click on a link to renew your password so that you can log in to its website. You should:",
      answerOptions:[
        { answerText: 'Pick up the phone and call the vendor, using a phone number you know to be correct, to confirm that the request is real.', isCorrect: true},
        { answerText: 'Reply to the text to confirm that you really need to renew your password.', isCorrect: false},
        { answerText: 'Click on the link. If it takes you to the vendor website, then you will know it is real.', isCorrect: false},
        { answerText: 'Automatically delete the email and block the sender before fact checking its legitimacy.', isCorrect: false},
      ],
      hint: 'Hint: Using verified contact information is a sure way to speak to someone legitimate.',
    },
    {
      questionText: "You fall for a phishing scam, what should you do to limit the damage?",
      answerOptions:[
        { answerText: 'Delete the phishing email', isCorrect: false},
        { answerText: 'Unplug the computer. This will get rid of any malware.', isCorrect: false},
        { answerText: 'Change any compromised passwords', isCorrect: true},
        { answerText: 'Delete your email address. This will reverse any damages.', isCorrect: false},
      ],
      hint: 'Hint: Ensuring that the rest of your personal information is secured should be a priority when you fall for a phishing scam.',
    },
    {
      questionText: "Which one of these statements is correct?",
      answerOptions:[
        { answerText: 'If you get an email that looks like it’s from someone you know, you can click on any links as long as you have a spam blocker and anti-virus protection.', isCorrect: false},
        { answerText: 'You can trust an email really comes from a client if it uses the client’s logo and contains at least one fact about the client that you know to be true.', isCorrect: false},
        { answerText: 'If you get a message from a colleague who needs your network password, you should never give it out unless the colleague says it’s an emergency.', isCorrect: false},
        { answerText: 'If you get an email from Human Resources asking you to provide personal information right away, you should check it out first to make sure they are who they say they are.', isCorrect: true},
      ],
      hint: 'Hint: Using a sense of urgency is a common way for threat actors to pressure users into disclosing information.',
    },
    {
      questionText: "An email from your boss asks for the name, addresses, and credit card information of the company’s top clients. The email says it’s urgent and to please reply right away. You should reply right away. True or False?",
      answerOptions:[
        { answerText: 'True', isCorrect: false},
        { answerText: 'False', isCorrect: true},
      ],
      hint: 'Hint: Using a sense of urgency is a common way for threat actors to pressure users into disclosing sensitive information.',
    },
    {
      questionText: "Your company X, has been compromised by a ransomware attack and demanded to pay in echange for your encrypted data. What should be your first responsibility?",
      answerOptions:[
        { answerText: 'Determine if ransomware demand is legitimate and follow instructions to get your data back.', isCorrect: false},
        { answerText: 'Ignore the demands, but back up all data just in case.', isCorrect: false},
        { answerText: 'Contact the police and do not pay the ransom.', isCorrect: true},
        { answerText: 'Work like you normally would', isCorrect: false},
      ],
      hint: 'Hint: They enforce the law,  and they prevent crime and disorder.',
    },
    {
      questionText: "Which hacking incident resulted in the exposure of personal data of 143 million individuals, including Social Security numbers and birth dates?",
      answerOptions:[
        { answerText: 'Target data breach', isCorrect: false},
        { answerText: 'Equifax data breach', isCorrect: true},
        { answerText: 'Yahoo data breaches', isCorrect: false},
        { answerText: 'Capital One data breach', isCorrect: false},
      ],
      hint: 'Hint: This data breach occurred in 2017 and affected a major credit reporting agency.',
    },
    {
      questionText: "Which hacking group claimed responsibility for the 2016 Democratic National Committee (DNC) email leak?",
      answerOptions:[
        { answerText: 'Anonymous', isCorrect: false},
        { answerText: 'Lizard Squad', isCorrect: false},
        { answerText: 'Fancy Bear', isCorrect: true},
        { answerText: 'Chaos Computer Club', isCorrect: false},
      ],
      hint: 'Hint: This group is believed to be sponsored by the Russian Government.',
    },
    {
      questionText: "What was the name of the computer worm that caused significant damage to computer systems worldwide in 2010, including those of Iran's nuclear program?",
      answerOptions:[
        { answerText: 'Stuxnet', isCorrect: true},
        { answerText: 'WannaCry', isCorrect: false},
        { answerText: 'Mirai', isCorrect: false},
        { answerText: 'NotPetya', isCorrect: false},
      ],
      hint: 'Hint: This worm virus is believed to be developed by American and Israeli backed state actors. It heavily damaged Iran’s nuclear program in 2010 using advanced techniques such as zero-day exploits and rootkit technology. ',
    },
    {
      questionText: "Which company was the target of the largest data breach in history, with hackers stealing the personal information of up to 3 billion user accounts in 2013?",
      answerOptions:[
        { answerText: 'LinkedIn', isCorrect: false},
        { answerText: 'Facebook', isCorrect: false},
        { answerText: 'Google', isCorrect: false},
        { answerText: 'Yahoo', isCorrect: true},
      ],
      hint: 'Hint: This company is known for providing an email service, and it took years for the breach to be discovered.',
    },
    {
      questionText: "In 2017, a group known as The Shadow Brokers leaked a collection of hacking tools allegedly developed by which government agency?",
      answerOptions:[
        { answerText: 'Central Intelligence Agency (CIA)', isCorrect: false},
        { answerText: 'Federal Bureau of Investigation (FBI)', isCorrect: false},
        { answerText: 'National Security Agency (NSA)', isCorrect: true},
        { answerText: 'National Cyber Security Authority (NISA)', isCorrect: false},
      ],
      hint: 'Hint: This American agency is responsible for foreign intelligence gathering and has a significant presence in the world of cybersecurity.',
    },
    {
      questionText: "Which of the following is an example of a strong password?",
      answerOptions:[
        { answerText: 'mYp@ss_w0rd', isCorrect: true},
        { answerText: '123456', isCorrect: false},
        { answerText: 'Abcd1234', isCorrect: false},
        { answerText: 'Password123', isCorrect: false},
      ],
      hint: 'Hint: A good rule of thumb is to mix different character types into your passwords.',
    },
    {
      questionText: "Which of the following is a way to protect against phishing attacks?",
      answerOptions:[
        { answerText: 'Regularly changing your passwords', isCorrect: false},
        { answerText: 'Sharing your personal information online', isCorrect: false},
        { answerText: 'Opening suspicious emails', isCorrect: false},
        { answerText: 'Verifying the sender and domain of the email', isCorrect: true},
      ],
      hint: 'Hint: This is a way to spot an email from a false sender.',
    },
    {
      questionText: "Which of the following is an example of two-factor authentication?",
      answerOptions:[
        { answerText: 'Entering your username and password', isCorrect: false},
        { answerText: 'Scanning your fingerprint', isCorrect: false},
        { answerText: 'Answering a security question', isCorrect: false},
        { answerText: 'Receiving a code via text message', isCorrect: true},
      ],
      hint: 'Hint: Two-factor authentication makes use of external means to verify a user.',
    },
    {
      questionText: "Which of the following is a good practice to secure your home Wi-Fi network?",
      answerOptions:[
        { answerText: 'Using an easily guessable network name', isCorrect: false},
        { answerText: 'Enabling WPA2 encryption', isCorrect: true},
        { answerText: 'Turning off the router when not in use', isCorrect: false},
        { answerText: 'Sharing your network password with guests', isCorrect: false},
      ],
      hint: 'Hint: Adding more barriers between external users and your network improves your odds against being compromised.',
    },
    {
      questionText: "Which of the following is a way to avoid downloading malware?",
      answerOptions:[
        { answerText: 'Clicking on unknown links and attachments', isCorrect: false},
        { answerText: 'Using unsecured public Wi-Fi', isCorrect: false},
        { answerText: 'Only downloading files from trusted sources', isCorrect: true},
        { answerText: 'Disabling your antivirus software', isCorrect: false},
      ],
      hint: 'Hint: Malware is often disguised as benign software.',
    },
    {
      questionText: "Risk assessments should be performed:",
      answerOptions:[
        { answerText: 'At the start of a program', isCorrect: false},
        { answerText: 'On a regular basis', isCorrect: true},
        { answerText: 'When an asset changes', isCorrect: false},
        { answerText: 'When a vulnerability is discovered', isCorrect: false},
      ],
      hint: 'Hint: Consistency is key in cybersecurity.',
    },
    {
      questionText: "Which of the following offers the strongest protection for wireless network traffic?",
      answerOptions:[
        { answerText: 'Wireless Protected Access 2 (WPA2)', isCorrect: true},
        { answerText: 'Wireless Protected Access-Advanced Encryption STandard (WPA-AES)', isCorrect: false},
        { answerText: 'Wired Equivalent Protection 128-bit (WEP-128)', isCorrect: false},
        { answerText: 'Wireless Protected Access-Temporary Key Integrity Protocol(WPA-TKIP)', isCorrect: false},
      ],
      hint: 'Hint: It was developed as an improvement over its predecessor, which had several vulnerabilities.',
    },
    {
      questionText: "A segmented network:",
      answerOptions:[
        { answerText: 'Offers defense in depth superior to a concentric-layers model', isCorrect: false},
        { answerText: 'Maximizes the delay experienced by an attacker', isCorrect: false},
        { answerText: 'Consists of two or more security zones', isCorrect: true},
        { answerText: 'Delivers superior performance for internal applications', isCorrect: false},
      ],
      hint: 'Hint: A type of network design that involves breaking a network into smaller segments or subnetworks.',
    },
    {
      questionText: "Which of the following should you do to restrict access to your files and devices?",
      answerOptions:[
        { answerText: 'Share passwords only with colleagues you trust', isCorrect: false},
        { answerText: 'Have your staff members access information via an open Wi-Fi network', isCorrect: false},
        { answerText: 'Update your software once a year', isCorrect: false},
        { answerText: 'Use multi-factor authentication', isCorrect: true},
      ],
      hint: 'Hint: It helps with protecting sensitive information.',
    },
    {
      questionText: "Backing up important files offline, on an external hard drive or in the cloud, will help protect your business in the event of a cyber attack. True or False? ",
      answerOptions:[
        { answerText: 'True', isCorrect: true},
        { answerText: 'False', isCorrect: false},
      ],
      hint: 'Hint: What would you feel if you lost all your important files because they were not backed up.',
    },
    {
      questionText: "What is the term for malware that is designed to spread quickly and infect as many systems as possible?",
      answerOptions:[
        { answerText: 'Ransomware', isCorrect: false},
        { answerText: 'Adware', isCorrect: false},
        { answerText: 'Worm', isCorrect: true},
        { answerText: 'Trojan horse', isCorrect: false},
      ],
      hint: 'Hint: This virus is self replicating and requires little human interaction to propagate.',
    },
    {
      questionText: "Which type of malware is designed to encrypt files on a victim's computer and demand payment in exchange for the decryption key?",
      answerOptions:[
        { answerText: 'Adware', isCorrect: false},
        { answerText: 'Ransomware', isCorrect: true},
        { answerText: 'Trojan horse', isCorrect: false},
        { answerText: 'Rootkit', isCorrect: false},
      ],
      hint: 'Hint: This virus gives criminals an easy way to coax a victim into paying them in order to restore their encrypted files.',
    },
    {
      questionText: "What is the term for a technique in which an attacker uses multiple compromised devices to launch a coordinated attack on a target?",
      answerOptions:[
        { answerText: 'DDoS attack', isCorrect: true},
        { answerText: 'Spear-phishing attack', isCorrect: false},
        { answerText: 'Watering hole attack', isCorrect: false},
        { answerText: 'Man-in-the-middle attack', isCorrect: false},
      ],
      hint: 'Hint: The term for the group of compromised PCs is a botnet.',
    },
    {
      questionText: "Which type of malware is designed to run in the background of a system and collect sensitive information without the user's knowledge?",
      answerOptions:[
        { answerText: 'Trojan horse', isCorrect: false},
        { answerText: 'Adware', isCorrect: false},
        { answerText: 'Worm', isCorrect: false},
        { answerText: 'Spyware', isCorrect: true},
      ],
      hint: 'Hint: This particular software tracks every aspect of activity or files on your device and transmits it to a threat actor or perpetrator of the software.',
    },
    {
      questionText: "What is a common sign of malware infection on a computer?",
      answerOptions:[
        { answerText: 'Pop-up ads appearing on the desktop', isCorrect: false},
        { answerText: 'A new browser toolbar appearing', isCorrect: false},
        { answerText: 'Sluggish performance and slow startup times', isCorrect: true},
        { answerText: 'The computer making strange noises', isCorrect: false},
      ],
      hint: 'Hint: More activity on a computer will take up resources.',
    },
    {
      questionText: "What is the term for the act of using someone else's credit card information to make purchases without their consent?",
      answerOptions:[
        { answerText: 'Phishing', isCorrect: false},
        { answerText: 'Identity theft', isCorrect: false},
        { answerText: 'Credit card fraud', isCorrect: true},
        { answerText: 'Hacking', isCorrect: false},
      ],
      hint: 'Hint: A rampant crime that can take place partially online and in person. ',
    },
    {
      questionText: "What is the term for the act of using deception to manipulate individuals to divulge confidential information for malicious intent?",
      answerOptions:[
        { answerText: 'Social engineering', isCorrect: true},
        { answerText: 'Ransomware', isCorrect: false},
        { answerText: 'DDoS Attack', isCorrect: false},
        { answerText: 'Blackmail', isCorrect: false},
      ],
      hint: 'Hint: An example is someone convincing a company representative to give them access to account data of an unsuspecting victim.',
    },
    {
      questionText: "What is the term for the act of intentionally distributing malicious software in order to cause damage to a computer or network?",
      answerOptions:[
        { answerText: 'Cyber espionage', isCorrect: false},
        { answerText: 'Cyber terrorism', isCorrect: false},
        { answerText: 'Cyber vandalism', isCorrect: true},
        { answerText: 'Cyber warfare', isCorrect: false},
      ],
      hint: 'Hint: The physical version of this crime can involve damaging property to display a criminals prowess or for revenge.',
    },
    {
      questionText: "What is the term for the act of accessing a computer or network without authorization in order to steal or modify data?",
      answerOptions:[
        { answerText: 'Hacking', isCorrect: true},
        { answerText: 'Phishing', isCorrect: false},
        { answerText: 'Social engineering', isCorrect: false},
        { answerText: 'Malware distribution', isCorrect: false},
      ],
      hint: 'Hint: This involves the attacker to use vulnerabilities on a digital system to access privileged data.',
    },
    {
      questionText: "What is the term for the act of using email or other electronic communication to deceive individuals into providing sensitive information?",
      answerOptions:[
        { answerText: 'Identity theft', isCorrect: false},
        { answerText: 'Ransomware', isCorrect: false},
        { answerText: 'Phishing', isCorrect: true},
        { answerText: 'Cyber espionage', isCorrect: false},
      ],
      hint: 'Hint: This attack often involves a victim being tricked into clicking an external link believing it to be from an authentic source.',
    },
    {
      questionText: "What is vulnerability discovery?",
      answerOptions:[
        { answerText: 'A process of fixing vulnerabilities in a system', isCorrect: false},
        { answerText: 'A process of identifying vulnerabilities in a system', isCorrect: true},
        { answerText: 'A process of protecting a system from potential vulnerabilities', isCorrect: false},
        { answerText: 'None of the above', isCorrect: false},
      ],
      hint: 'Hint: Vulnerability discovery is the process of identifying potential weaknesses or flaws in a system or application that could be exploited by attackers.',
    },
    {
      questionText: "Which of the following is NOT a method of vulnerability discovery?",
      answerOptions:[
        { answerText: 'Penetration testing', isCorrect: false},
        { answerText: 'Vulnerability scanning', isCorrect: false},
        { answerText: 'Firewall configuration', isCorrect: true},
        { answerText: 'Manual code review', isCorrect: false},
      ],
      hint: 'Hint: Vulnerability scanning, penetration testing, and manual code review are all methods of vulnerability discovery, but firewall configuration refers to the process of setting up and configuring network security devices to prevent unauthorized access.',
    },
    {
      questionText: "What is a vulnerability scanner?",
      answerOptions:[
        { answerText: 'A tool that attempts to exploit vulnerabilities in a system', isCorrect: false},
        { answerText: 'A tool that identifies potential vulnerabilities in a system', isCorrect: true},
        { answerText: 'A tool that protects a system from potential vulnerabilities', isCorrect: false},
        { answerText: 'None of the above', isCorrect: false},
      ],
      hint: 'Hint: A vulnerability scanner is an automated tool that scans a system or application for potential vulnerabilities and generates a report of any identified issues.',
    },
    {
      questionText: "What is a penetration test?",
      answerOptions:[
        { answerText: 'A test that attempts to exploit vulnerabilities in a system', isCorrect: true},
        { answerText: 'A test that identifies potential vulnerabilities in a system', isCorrect: false},
        { answerText: 'A test that protects a system from potential vulnerabilities', isCorrect: false},
        { answerText: 'None of the above', isCorrect: false},
      ],
      hint: 'Hint: A penetration test is a simulated attack on a system or application with the goal of identifying potential vulnerabilities that could be exploited by an attacker.',
    },
    {
      questionText: "What is manual code review?",
      answerOptions:[
        { answerText: 'A process of scanning code for potential vulnerabilities using automated tools', isCorrect: false},
        { answerText: 'A process of updating code to fix known vulnerabilities', isCorrect: false},
        { answerText: 'A process of reviewing code line-by-line for potential vulnerabilities', isCorrect: true},
        { answerText: 'None of the above', isCorrect: false},
      ],
      hint: 'Hint: Manual code review is a method of vulnerability discovery that involves reviewing source code line-by-line to identify potential vulnerabilities that could be exploited by an attacker.',
    },
    {
      questionText: "What is fuzz testing?",
      answerOptions:[
        { answerText: 'A process of reviewing code line-by-line for potential vulnerabilities', isCorrect: false},
        { answerText: 'A process of simulating attacks on a system or application', isCorrect: false},
        { answerText: 'A special way to test if a computer has too much dust', isCorrect: false},
        { answerText: 'A process of randomly generating inputs to a program to identify potential vulnerabilities', isCorrect: true},
      ],
      hint: 'Hint: Fuzz testing, also known as fuzzing, is a method of vulnerability discovery that involves generating random inputs to a program in order to identify potential vulnerabilities.',
    },
    {
      questionText: "What is a zero-day vulnerability?",
      answerOptions:[
        { answerText: 'A vulnerability that is unknown to the vendor and has not yet been fixed', isCorrect: true},
        { answerText: 'A vulnerability that has been discovered and fixed by the vendor', isCorrect: false},
        { answerText: 'A vulnerability that has been exploited by attackers', isCorrect: false},
        { answerText: 'None of the above', isCorrect: false},
      ],
      hint: 'Hint: A zero-day vulnerability is a type of vulnerability that is unknown to the vendor and has not yet been fixed, making it particularly dangerous because attackers can exploit it without the vendor having a chance to patch it.',
    },
    {
      questionText: "What is threat modeling?",
      answerOptions:[
        { answerText: 'A process of identifying potential threats to a system or application', isCorrect: true},
        { answerText: 'A process of modeling potential vulnerabilities in a system or application', isCorrect: false},
        { answerText: 'A process of modeling potential attacks on a system or application', isCorrect: false},
        { answerText: 'None of the above', isCorrect: false},
      ],
      hint: 'Hint: Threat modeling deals with mitigating potential cyber threats.',
    },
    {
      questionText: "What is the primary goal of digital forensics?",
      answerOptions:[
        { answerText: 'To recover lost data', isCorrect: false},
        { answerText: 'To prevent cyber attacks', isCorrect: false},
        { answerText: 'To analyze digital devices for evidence', isCorrect: true},
        { answerText: 'To encrypt sensitive information', isCorrect: false},
      ],
      hint: 'Hint: Forensics is typically used by law enforcement.',
    },
    {
      questionText: "What is malware?",
      answerOptions:[
        { answerText: 'A tool used by forensic analysts to recover data', isCorrect: false},
        { answerText: 'A type of encryption used to secure data', isCorrect: false},
        { answerText: 'An operating system for digital devices', isCorrect: false},
        { answerText: 'Software designed to harm digital devices', isCorrect: true},
      ],
      hint: 'Hint: Usually spread by people with bad intentions.',
    },
    {
      questionText: "What is the role of hash values in digital forensics?",
      answerOptions:[
        { answerText: 'To encrypt sensitive information', isCorrect: false},
        { answerText: 'To recover lost data', isCorrect: false},
        { answerText: 'To authenticate digital evidence', isCorrect: true},
        { answerText: 'To prevent cyber attacks', isCorrect: false},
      ],
      hint: 'Hint: Hash values can work as digital fingerprints, uniquely set to a file.',
    },
    {
      questionText: "What is a write blocker?",
      answerOptions:[
        { answerText: 'A tool used to protect against cyber attacks', isCorrect: false},
        { answerText: 'A tool used to recover lost data', isCorrect: false},
        { answerText: 'A device used to prevent modification of digital evidence during analysis', isCorrect: true},
        { answerText: 'A type of encryption used to secure data', isCorrect: false},
      ],
      hint: 'Hint: A device used in forensics to prevent write outs. ',
    },
    {
      questionText: "What is steganography?",
      answerOptions:[
        { answerText: 'A type of encryption used to secure data', isCorrect: false},
        { answerText: 'A tool used to recover lost data', isCorrect: false},
        { answerText: 'A method of hiding information within another file', isCorrect: true},
        { answerText: 'An operating system for digital devices', isCorrect: false},
      ],
      hint: 'Hint: Often used in combination with encryption to hide a files contents.',
    },
    {
      questionText: "What is network forensics?",
      answerOptions:[
        { answerText: 'The analysis of digital devices for evidence', isCorrect: false},
        { answerText: 'The analysis of network traffic for evidence', isCorrect: true},
        { answerText: 'The recovery of lost data from a network', isCorrect: false},
        { answerText: 'The prevention of cyber attacks on a network', isCorrect: false},
      ],
      hint: 'Hint: Used to identify the source of a cyber attack on a network.',
    },
    {
      questionText: "What is the role of a forensic analyst in investigating a cyber attack?",
      answerOptions:[
        { answerText: 'To prevent future cyber attacks', isCorrect: false},
        { answerText: 'To recover lost data', isCorrect: false},
        { answerText: 'To analyze digital devices for evidence', isCorrect: true},
        { answerText: 'To encrypt sensitive information', isCorrect: false},
      ],
      hint: 'Hint: Analysts usually work towards creating a legal case.',
    },
    {
      questionText: "What is a virtual machine?",
      answerOptions:[
        { answerText: 'An operating system for digital devices', isCorrect: false},
        { answerText: 'A tool used to prevent cyber attacks', isCorrect: false},
        { answerText: 'A device used to recover lost data', isCorrect: false},
        { answerText: 'A software environment that emulates a physical computer', isCorrect: true},
      ],
      hint: 'Hint: This can be fine tuned to the users specifications and can work as a useful tool to safely work with malware.',
    },
    {
      questionText: "What is the chain of custody in digital forensics?",
      answerOptions:[
        { answerText: 'The chronological documentation of the handling of digital evidence', isCorrect: true},
        { answerText: 'The analysis of network traffic for evidence', isCorrect: false},
        { answerText: 'The recovery of lost data from a network', isCorrect: false},
        { answerText: 'The prevention of cyber attacks on a network', isCorrect: false},
      ],
      hint: 'Hint: This is used in multiple fields of forensics to avert evidence tampering.',
    },
    {
      questionText: "What is the role of mobile forensics in digital forensics?",
      answerOptions:[
        { answerText: 'To analyze digital devices for evidence', isCorrect: false},
        { answerText: 'To prevent cyber attacks on mobile devices', isCorrect: false},
        { answerText: 'To recover lost data from mobile devices', isCorrect: true},
        { answerText: 'To encrypt sensitive information on mobile devices', isCorrect: false},
      ],
      hint: 'Hint: This deals with finding evidence from specific types of digital devices.',
    },
    {
      questionText: "The attack mechanism directed against a system is commonly called a(n):",
      answerOptions:[
        { answerText: 'Exploit', isCorrect: true},
        { answerText: 'Vulnerability', isCorrect: false},
        { answerText: 'Payload', isCorrect: false},
        { answerText: 'Attack Vector', isCorrect: false},
      ],
      hint: 'Hint: This can be considered the mechanism used to gain access to the system making use of a vulnerability in the system.',
    },
    {
      questionText: "Which two factors are used to calculate the likelihood of an event?",
      answerOptions:[
        { answerText: 'Threat and vulnerability', isCorrect: true},
        { answerText: 'Vulnerability and asset value', isCorrect: false},
        { answerText: 'Asset count and asset value', isCorrect: false},
        { answerText: 'Threat and asset count', isCorrect: false},
      ],
      hint: 'Hint: One of the factors has to do with the potential cause of the incident, while the other factor has to do with the potential impact of the incident.',
    },
    {
      questionText: "What is ethical hacking?",
      answerOptions:[
        { answerText: 'Unethical hacking', isCorrect: false},
        { answerText: 'Hacking with malicious intent', isCorrect: false},
        { answerText: 'Hacking with permission and for the purpose of identifying vulnerabilities', isCorrect: true},
        { answerText: 'None of the above', isCorrect: false},
      ],
      hint: 'Hint: Corporations or governments hire ethical hackers.',
    },
    {
      questionText: "What is the goal of ethical hacking?",
      answerOptions:[
        { answerText: 'To identify vulnerabilities and help improve security', isCorrect: true},
        { answerText: 'To cause harm to computer systems', isCorrect: false},
        { answerText: 'To exploit vulnerabilities for personal gain', isCorrect: false},
        { answerText: 'None of the above', isCorrect: false},
      ],
      hint: 'Hint: Ethical hacking can be voluntary or requested by corporations and/or governments.',
    },
    {
      questionText: "What is a vulnerability assessment?",
      answerOptions:[
        { answerText: 'A method of exploiting security weaknesses in a system', isCorrect: false},
        { answerText: 'A way to launch denial of service attacks on a system', isCorrect: false},
        { answerText: 'A way in which vulnerabilities are introduced', isCorrect: false},
        { answerText: 'A process to identify and rank potential security weaknesses in a system', isCorrect: true},
      ],
      hint: 'Hint: Usually requested by corporations and/or governments.',
    },
    {
      questionText: "What is a penetration test?",
      answerOptions:[
        { answerText: 'A test to see how deep into a system an attacker can penetrate', isCorrect: false},
        { answerText: 'A test to identify and exploit security vulnerabilities in a system', isCorrect: true},
        { answerText: 'A test to see if a system is vulnerable to social engineering attacks', isCorrect: false},
        { answerText: 'None of the above', isCorrect: false},
      ],
      hint: 'Hint: Requested as a means to discover weaknesses on a system.',
    },
    {
      questionText: "What is the difference between black hat and white hat hackers?",
      answerOptions:[
        { answerText: 'Black hat hackers are ethical, while white hat hackers are unethical', isCorrect: false},
        { answerText: 'Black hat hackers are paid, while white hat hackers are volunteers', isCorrect: false},
        { answerText: 'Black hat hackers use their skills for malicious purposes, while white hat hackers use their skills to improve security', isCorrect: true},
        { answerText: 'None of the above', isCorrect: false},
      ],
      hint: 'Hint: These two differ in their intent and end goals.',
    },
    {
      questionText: "What is the difference between vulnerability scanning and penetration testing?",
      answerOptions:[
        { answerText: 'Vulnerability scanning only identifies vulnerabilities, while penetration testing only exploits them.', isCorrect: false},
        { answerText: 'Vulnerability scanning is a more comprehensive form of penetration testing.', isCorrect: false},
        { answerText: 'Vulnerability scanning is a less comprehensive form of penetration testing.', isCorrect: true},
        { answerText: 'Vulnerability scanning and penetration testing are the same thing.', isCorrect: false},
      ],
      hint:'Hint: vulnerability scanning is an automated security test while penetration testing is done by a cybersecurity expert',
    },
  ]; 

  const handleAnswerButtonClick = (isCorrect) =>{
    if(isCorrect===true){
      alert("this answer is correct!");
      setScore(score + 1 );
      if(livesCount==0){setLivesCount(livesCount+1)}
      const nextQuestion = currentQuestion+1;
      if(nextQuestion<questions.length){
        setCurrentQuestion(nextQuestion);
        setShowHint(false);
      }else{
        setShowScore(true);
      }
    }
    
    else{
      alert("wrong, please try again")
      setLivesCount(livesCount - 1);
      if(livesCount == 0){
      const nextQuestion = currentQuestion + 1;
      if(nextQuestion<questions.length){
        setCurrentQuestion(nextQuestion);
        setShowHint(false);
      }else{
        setShowScore(true);
      }
      setLivesCount(livesCount + 1);
    }
    }
  }

  const [currentQuestion, setCurrentQuestion ] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const [livesCount, setLivesCount] = useState(1);

/* Used to set the state of showHint initially to false, hintCount is set first set to 0
toggleHint checks the hintCount and if it is less than 3, it will setShowHint to true
If 3 hints have been used it will alert the player that they ran out of hints
const question is used to track the question you are on and is used when resetting the game*/
  const [showHint, setShowHint] = useState(false);

  const [hintCount, setHintCount] = useState(0);

  const toggleHint = () => {
    if (hintCount < 6){
      setHintCount(hintCount + 1);
      setShowHint(true);
    }
    else
    alert("Sorry! You ran out of hints")
  };

  const question = questions[questionIndex];

  return(
    <div className='main'>
      {/* Hint: replace "false" with logic to display the 
      score when the user has answered all the questions*/}

      <div className='quiz-game'>
      {showScore ? (
        <div className='score-section'>You Scored {score} out of {questions.length}</div>
      ):(
        <>
      <div className='Whole-game'>
        <div className='Quiz'>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}/{questions.length}</span>
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOptions)=>
              <button className="answer-button" onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
            )}
          </div>
        </div>

          {/*Hint section with a button to toggle the hint and displays the hint and a hint count*/}
<div className='Lives-Hints'>
          <div className='Hint-Section'>
          <button className="hint-button"onClick={toggleHint}>Hint</button>
            {showHint && <p>{questions[currentQuestion].hint}</p>}
            <p>Hints Used: {hintCount}</p>
          </div>

          <div className='Lives-Section'>
            <img className='heart'src={heart} alt="Heart" />
            {livesCount}
          </div>
          </div>
        </div>
        </>
      )}
      </div>
    </div>
  )
}

export default Question;