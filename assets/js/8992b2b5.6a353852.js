"use strict";(self.webpackChunkgotchas=self.webpackChunkgotchas||[]).push([[486],{5483:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],i={},u=void 0,c={unversionedId:"aws/rds",id:"aws/rds",isDocsHomePage:!1,title:"rds",description:"Activating IAM for RDS",source:"@site/wiki/aws/rds.md",sourceDirName:"aws",slug:"/aws/rds",permalink:"/docusaurus_poc/wiki/aws/rds",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ecs",permalink:"/docusaurus_poc/wiki/aws/ecs"}},l=[{value:"Activating IAM for RDS",id:"activating-iam-for-rds",children:[]}],d={toc:l};function p(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"activating-iam-for-rds"},"Activating IAM for RDS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enable IAM DB authentication"),(0,o.kt)("li",{parentName:"ol"},"Create IAM user that maps to the database user; ",(0,o.kt)("inlineCode",{parentName:"li"},"CREATE USER foo with login; GRANT rds_iam to foo;")),(0,o.kt)("li",{parentName:"ol"},"Attach role to user/ec2")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"rds-db:connect\nresources: arn:dbuser/foo\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Generate AWS authentication token assuming AWS CLI profile name is ",(0,o.kt)("inlineCode",{parentName:"li"},"bar"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export RDSHOST=rds.dns.com\nexport PGPASSWORD="$(aws rds generate-db-auth-token --hostname $RDSHOST --port 5432 --region ap-southeast-1 --username foo--profile bar)"\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Connect with\n",(0,o.kt)("inlineCode",{parentName:"li"},'AWS_PROFILE=bar psql "host=$RDSHOST port=5432 dbname=dbname user=foo password=$PGPASSWORD"'))))}p.isMDXComponent=!0}}]);