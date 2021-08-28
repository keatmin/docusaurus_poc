## Activating IAM for RDS 

1. Enable IAM DB authentication
2. Create IAM user that maps to the database user; `CREATE USER foo with login; GRANT rds_iam to foo;`
3. Attach role to user/ec2

```json
rds-db:connect
resources: arn:dbuser/foo
```

4. Generate AWS authentication token assuming AWS CLI profile name is `bar`

```bash
export RDSHOST=rds.dns.com
export PGPASSWORD="$(aws rds generate-db-auth-token --hostname $RDSHOST --port 5432 --region ap-southeast-1 --username foo--profile bar)"
```

5. Connect with
```AWS_PROFILE=bar psql "host=$RDSHOST port=5432 dbname=dbname user=foo password=$PGPASSWORD"```
