# PSU Campus Connect

## Project Description

PSU Campus Connect is a responsive campus event guide created for students at the fictional Piedmont State University. The site helps students discover upcoming campus events and view detailed information about a featured event.

## Layout Decisions

Flexbox is used for the navigation, hero section, footer links, and related event cards. Flexbox works well in these areas because the content needs to align, space evenly, and wrap when the screen becomes smaller.

CSS Grid is used for the upcoming event cards on the home page and for the main content and sidebar on the event details page. Grid works well for these sections because they use rows and columns.

## Responsive Design

The site uses two breakpoints:

- 900px: The event card grid changes to one column, and the event details sidebar moves below the main content.
- 600px: The hero section and navigation become vertical for smaller screens.

The pages were tested by resizing the browser window and checking the layouts at desktop and mobile widths.

## Semantic HTML

- `header` is used for the site title and introductory information.
- `nav` contains the main navigation links.
- `main` contains the primary content of each page.
- `section` groups related content by topic.
- `article` is used for individual event cards and event content.
- `aside` contains additional event information in the sidebar.
- `footer` contains contact information and useful navigation links.

## Sources

Images used in this project were obtained from:
- https://www.google.com/imgres?q=college%20students%20outdoor%20campus%20event&imgurl=https%3A%2F%2Fwpc.sched.com%2Fwp-content%2Fuploads%2F2024%2F10%2Fcollege-event-ideas.webp&imgrefurl=https%3A%2F%2Fsched.com%2Fblog%2Fcollege-event-ideas%2F&docid=tbF9QY3Jo2PnWM&tbnid=QuB2es_b-bgD-M&vet=12ahUKEwia_KbD3fSWAxXHKlkFHbkzCe4QnPAOegQIQBAA..i&w=1280&h=908&hcb=2&ved=2ahUKEwia_KbD3fSWAxXHKlkFHbkzCe4QnPAOegQIQBAA

- https://www.google.com/imgres?q=fall%20campus%20festival%20students&imgurl=https%3A%2F%2Fwww.sccsc.edu%2Fmedia%2Fspartanburgcc%2Fcontent-assets%2Fabout%2Four-fall-festival%2F52445973272_da6ca98a35_o.jpg&imgrefurl=https%3A%2F%2Fwww.sccsc.edu%2Fabout%2Four-fall-festival%2F&docid=Km1exVGD9zLTGM&tbnid=9PFunsPKY2U7wM&vet=12ahUKEwj3wdeN3vSWAxUSGVkFHeNALnwQnPAOegUIuwIQAA..i&w=2048&h=1363&hcb=2&ved=2ahUKEwj3wdeN3vSWAxUSGVkFHeNALnwQnPAOegUIuwIQAA

- https://www.google.com/imgres?q=college%20students%20doing%20coding&imgurl=https%3A%2F%2Fwww.apple.com%2Fnewsroom%2Fimages%2Fpassions%2Feducation%2FChicago_kids_learn_to_code_20171212_big.jpg.large.jpg&imgrefurl=https%3A%2F%2Fwww.apple.com%2Fnewsroom%2F2017%2F12%2Fapple-and-chicago-bring-coding-opportunities-to-city-students%2F&docid=Q3n8PD83xC1FXM&tbnid=Lmor5OfzKFTLKM&vet=12ahUKEwj45JKT3PSWAxU2L1kFHQwWIWIQnPAOegUIggEQAA..i&w=816&h=540&hcb=2&ved=2ahUKEwj45JKT3PSWAxU2L1kFHQwWIWIQnPAOegUIggEQAA

- https://www.google.com/imgres?q=international%20food%20festival%20students&imgurl=https%3A%2F%2Funknews.unk.edu%2Fwp-content%2Fuploads%2F2023%2F11%2FInternational-Food-Festival-2023-15.jpg&imgrefurl=https%3A%2F%2Funknews.unk.edu%2F2023%2F11%2F12%2Fannual-international-food-festival-gives-attendees-a-taste-of-other-cultures%2F&docid=Xfg0zpv8xlQ1nM&tbnid=CH3gYylXz8sPgM&vet=12ahUKEwjG1PTV2_SWAxVrKlkFHRJHCqkQnPAOegQIdRAA..i&w=1175&h=768&hcb=2&ved=2ahUKEwjG1PTV2_SWAxVrKlkFHRJHCqkQnPAOegQIdRAA

- https://www.google.com/imgres?q=outdoor%20movie%20college%20campus&imgurl=https%3A%2F%2Fs3-media0.fl.yelpcdn.com%2Fbphoto%2FgYs4lHN1f2PeG7fRUnMRrg%2F1000s.jpg&imgrefurl=https%3A%2F%2Fwww.yelp.com%2Fsearch%3Ffind_desc%3DOutdoor%2BMovies%26find_loc%3DCollege%2BStation%252C%2BTX%2B77845&docid=RRpE0WeoxzygXM&tbnid=76fBbanNWQzfCM&vet=12ahUKEwiPxMeu2_SWAxXqMlkFHb2uBKsQnPAOegUIqQIQAA..i&w=1000&h=1000&hcb=2&itg=1&ved=2ahUKEwiPxMeu2_SWAxXqMlkFHb2uBKsQnPAOegUIqQIQAA

- https://www.google.com/imgres?q=outdoor%20yoga%20students&imgurl=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F61f2be66a8b0c266b87de272%2Fd65cadff-7b90-4e9f-b3f7-3a9b4b8cb86b%2FDSC_9789%2B2.JPG&imgrefurl=https%3A%2F%2Fwww.yogahabit.com%2Foutdooryoga&docid=3md4CjYoWODJpM&tbnid=R9aHeTQ_A3v26M&vet=12ahUKEwj_lcPw3vSWAxWMMVkFHUeHCNQ4ChCc8A56BQiFARAA..i&w=2048&h=1365&hcb=2&ved=2ahUKEwj_lcPw3vSWAxWMMVkFHUeHCNQ4ChCc8A56BQiFARAA

All written event content and university information are fictional and were created for this assignment.